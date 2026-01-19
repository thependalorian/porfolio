# Certificate Image Verification

## Implementation Strategy

The website uses **two types of certificate images**:

1. **Accredible API Images** - Direct image URLs from Accredible's API (for Accredible-issued certificates)
2. **Local Image Files** - Stored in `/public/images/certificates/` (for non-Accredible certificates)

## Accredible Certificates (Using API Image URLs)

All Accredible certificates use direct image URLs from the Accredible API. These are configured in `lib/data/professional-data.ts` with the `accredibleImageUrl` property.

### Accredible Certificate Mappings

| Certificate Title | Accredible Image URL | Credential Page |
|------------------|---------------------|----------------|
| Rearchitecting the Financial System | `certificate/106770521` | [View Credential](https://www.credential.net/1b158799-77b9-4257-9ef3-43750f6af0df#acc.LNGqF3XZ) |
| Online Certificate for Fintech in Africa | `certificate/76213120` | [View Credential](https://www.credential.net/e891e773-399f-4aaa-8a82-ad27d42c0cdc#acc.lbIY1U8X) |
| Navigating Digital Transformation | `badge/66417423` | [View Credential](https://www.credential.net/93f935aa-dffc-48c7-8483-3ceca2981138#acc.5jpv2gIL) |
| Open Banking & Platforms Specialisation: Technology and Security | `certificate/66266530` | [View Credential](https://www.credential.net/c2b0d7f9-aefe-4f77-8b0f-2d6dd42c0647#acc.K1yjdlm5) |
| Open Banking and Platforms in Finance Specialisation | `certificate/66267705` | [View Credential](https://www.credential.net/7a245f36-ca0f-433b-9285-e3935bc306bc#acc.EUg8lyoL) |
| Open Banking & Platforms Specialisation: Regulations Standards and Operational Risks | `certificate/65933379` | [View Credential](https://www.credential.net/016064a7-a7e2-4125-afb5-a2e4574043ce#acc.R5AEspZ4) |
| Open Banking & Platforms Specialisation: Business Models and Transformation of Incumbents | `certificate/65508518` | [View Credential](https://www.credential.net/7bb20d15-4c70-4fdc-bda4-c6480dd45ac8#acc.HC7tx1qL) |
| Card Payment Networks Explained | `badge/65540085` | [View Credential](https://www.credential.net/1be9c933-91fc-42c6-93fc-6a3de7015756#acc.NX6mChHT) |
| Open Banking & Platforms Specialisation: Business Models and Implementation of New Entrants | `certificate/65292890` | [View Credential](https://www.credential.net/b170e197-4e1d-4421-9421-ac6e186369d1#acc.eD7sjSB0) |
| Open Banking & Platforms Specialisation: An Industry overview of Open Banking | `certificate/65034644` | [View Credential](https://www.credential.net/bdc8f4f7-8042-4dba-988c-8e7bbdf1c666#acc.kVfRCgI0) |

**Full URL Format**: `https://api.accredible.com/v1/frontend/credential_website_embed_image/{type}/{id}`

## Local Image Files (Non-Accredible Certificates)

The following certificates use local image files stored in `/public/images/certificates/`:

| Certificate Title | Local Image Path | Status |
|------------------|-----------------|--------|
| Master of Business Administration (MBA) | `/images/certificates/mba-certificate.JPG` | ✅ Configured |
| Bachelor of Engineering: Civil & Environmental Engineering | `/images/certificates/engineering-degree.JPG` | ✅ Configured |
| Operations Certificate | `/images/certificates/operations-cert.JPG` | ✅ Configured |
| AI Bootcamp Certificate | `/images/certificates/aibootcamp-cert.png` | ✅ Configured |

## Available Local Certificate Images

The following image files exist in `/public/images/certificates/` but may not be currently used:

- `fintech-cert.png` - Available but not mapped
- `openbanking-cert.png` - Available but not mapped
- `certificate5.png` - Available but not mapped

## Technical Implementation

### Next.js Configuration

The `next.config.js` file includes the following configuration to allow loading Accredible images:

```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'api.accredible.com',
    },
    {
      protocol: 'https',
      hostname: 'images.credential.net',
    },
  ],
}
```

### Component Usage

Certificates are rendered in `components/features/certifications/CertificationsSection.tsx`:

- Accredible certificates use the `accredibleImageUrl` property
- Local certificates use the `image` property
- Both are rendered using Next.js `Image` component for optimization

## Verification Status

✅ **All Accredible certificate image URLs are verified and correctly mapped**
✅ **All local certificate images are configured**
✅ **No duplicate image URLs**
✅ **Next.js image domain configuration is correct**

## Last Updated

December 2024 - All mappings verified and documented
