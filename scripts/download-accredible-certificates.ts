/**
 * Download Accredible Certificate Images
 * 
 * Purpose: Download certificate images from Accredible credential URLs
 * Location: /scripts/download-accredible-certificates.ts
 * 
 * Usage: npx tsx scripts/download-accredible-certificates.ts
 */

import fs from 'fs'
import path from 'path'
import https from 'https'
import http from 'http'

const certificates = [
  {
    credentialId: '1b158799-77b9-4257-9ef3-43750f6af0df',
    title: 'Rearchitecting the Financial System',
    url: 'https://www.credential.net/1b158799-77b9-4257-9ef3-43750f6af0df#acc.LNGqF3XZ',
  },
  {
    credentialId: 'e891e773-399f-4aaa-8a82-ad27d42c0cdc',
    title: 'Online Certificate for Fintech in Africa',
    url: 'https://www.credential.net/e891e773-399f-4aaa-8a82-ad27d42c0cdc#acc.lbIY1U8X',
  },
  {
    credentialId: '93f935aa-dffc-48c7-8483-3ceca2981138',
    title: 'Navigating Digital Transformation',
    url: 'https://www.credential.net/93f935aa-dffc-48c7-8483-3ceca2981138#acc.5jpv2gIL',
  },
  {
    credentialId: 'c2b0d7f9-aefe-4f77-8b0f-2d6dd42c0647',
    title: 'Open Banking & Platforms Specialisation: Technology and Security',
    url: 'https://www.credential.net/c2b0d7f9-aefe-4f77-8b0f-2d6dd42c0647#acc.K1yjdlm5',
  },
  {
    credentialId: '7a245f36-ca0f-433b-9285-e3935bc306bc',
    title: 'Open Banking and Platforms in Finance Specialisation',
    url: 'https://www.credential.net/7a245f36-ca0f-433b-9285-e3935bc306bc#acc.EUg8lyoL',
  },
  {
    credentialId: '016064a7-a7e2-4125-afb5-a2e4574043ce',
    title: 'Open Banking & Platforms Specialisation: Regulations Standards and Operational Risks',
    url: 'https://www.credential.net/016064a7-a7e2-4125-afb5-a2e4574043ce#acc.R5AEspZ4',
  },
  {
    credentialId: '7bb20d15-4c70-4fdc-bda4-c6480dd45ac8',
    title: 'Open Banking & Platforms Specialisation: Business Models and Transformation of Incumbents',
    url: 'https://www.credential.net/7bb20d15-4c70-4fdc-bda4-c6480dd45ac8#acc.HC7tx1qL',
  },
  {
    credentialId: '1be9c933-91fc-42c6-93fc-6a3de7015756',
    title: 'Card Payment Networks Explained',
    url: 'https://www.credential.net/1be9c933-91fc-42c6-93fc-6a3de7015756#acc.NX6mChHT',
  },
  {
    credentialId: 'b170e197-4e1d-4421-9421-ac6e186369d1',
    title: 'Open Banking & Platforms Specialisation: Business Models and Implementation of New Entrants',
    url: 'https://www.credential.net/b170e197-4e1d-4421-9421-ac6e186369d1#acc.eD7sjSB0',
  },
  {
    credentialId: 'bdc8f4f7-8042-4dba-988c-8e7bbdf1c666',
    title: 'Open Banking & Platforms Specialisation: An Industry overview of Open Banking',
    url: 'https://www.credential.net/bdc8f4f7-8042-4dba-988c-8e7bbdf1c666#acc.kVfRCgI0',
  },
]

// Accredible certificate image URL pattern
// Typically: https://api.accredible.com/v1/credentials/{credential_id}/image
// Or: https://www.credential.net/credential/{credential_id}/image

async function downloadImage(url: string, filepath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath)
    const protocol = url.startsWith('https') ? https : http

    protocol
      .get(url, (response) => {
        if (response.statusCode === 301 || response.statusCode === 302) {
          // Follow redirect
          return downloadImage(response.headers.location!, filepath).then(resolve).catch(reject)
        }
        if (response.statusCode !== 200) {
          file.close()
          fs.unlinkSync(filepath)
          reject(new Error(`Failed to download: ${response.statusCode}`))
          return
        }
        response.pipe(file)
        file.on('finish', () => {
          file.close()
          resolve()
        })
      })
      .on('error', (err) => {
        file.close()
        if (fs.existsSync(filepath)) {
          fs.unlinkSync(filepath)
        }
        reject(err)
      })
  })
}

async function main() {
  const certificatesDir = path.join(process.cwd(), 'public', 'images', 'certificates')
  
  // Ensure directory exists
  if (!fs.existsSync(certificatesDir)) {
    fs.mkdirSync(certificatesDir, { recursive: true })
  }

  console.log('Downloading Accredible certificate images...\n')

  for (const cert of certificates) {
    const filename = `${cert.credentialId}.png`
    const filepath = path.join(certificatesDir, filename)
    
    // Try different Accredible image URL patterns
    const imageUrls = [
      `https://api.accredible.com/v1/credentials/${cert.credentialId}/image`,
      `https://www.credential.net/credential/${cert.credentialId}/image`,
      `https://api.accredible.com/v1/credential/${cert.credentialId}/image`,
    ]

    let downloaded = false
    for (const imageUrl of imageUrls) {
      try {
        console.log(`Trying to download ${cert.title}...`)
        console.log(`  URL: ${imageUrl}`)
        await downloadImage(imageUrl, filepath)
        console.log(`  ✓ Downloaded: ${filename}\n`)
        downloaded = true
        break
      } catch (error) {
        console.log(`  ✗ Failed: ${(error as Error).message}`)
        continue
      }
    }

    if (!downloaded) {
      console.log(`  ⚠ Could not download ${cert.title} - manual download required\n`)
    }
  }

  console.log('Download complete!')
  console.log('\nNote: If some images failed to download, you may need to:')
  console.log('1. Visit each Accredible URL')
  console.log('2. Right-click the certificate image')
  console.log('3. Save the image with the credential ID as filename')
  console.log('4. Place it in public/images/certificates/')
}

main().catch(console.error)
