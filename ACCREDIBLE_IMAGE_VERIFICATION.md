# Accredible Image URL Verification

## Complete Certificate Mapping

This document tracks all Accredible certificate image URLs used in the website.

| # | Certificate Title | Credential ID | Accredible Image URL | Status |
|---|------------------|--------------|---------------------|--------|
| 1 | Rearchitecting the Financial System | `1b158799-77b9-4257-9ef3-43750f6af0df` | `certificate/106770521` | ✅ Verified |
| 2 | Online Certificate for Fintech in Africa | `e891e773-399f-4aaa-8a82-ad27d42c0cdc` | `certificate/76213120` | ✅ Verified |
| 3 | Navigating Digital Transformation | `93f935aa-dffc-48c7-8483-3ceca2981138` | `badge/66417423` | ✅ Verified |
| 4 | Open Banking & Platforms Specialisation: Technology and Security | `c2b0d7f9-aefe-4f77-8b0f-2d6dd42c0647` | `certificate/66266530` | ✅ Verified |
| 5 | Open Banking and Platforms in Finance Specialisation | `7a245f36-ca0f-433b-9285-e3935bc306bc` | `certificate/66267705` | ✅ Verified |
| 6 | Open Banking & Platforms Specialisation: Regulations Standards and Operational Risks | `016064a7-a7e2-4125-afb5-a2e4574043ce` | `certificate/65933379` | ✅ Verified |
| 7 | Open Banking & Platforms Specialisation: Business Models and Transformation of Incumbents | `7bb20d15-4c70-4fdc-bda4-c6480dd45ac8` | `certificate/65508518` | ✅ Verified |
| 8 | Card Payment Networks Explained | `1be9c933-91fc-42c6-93fc-6a3de7015756` | `badge/65540085` | ✅ Verified |
| 9 | Open Banking & Platforms Specialisation: Business Models and Implementation of New Entrants | `b170e197-4e1d-4421-9421-ac6e186369d1` | `certificate/65292890` | ✅ Verified |
| 10 | Open Banking & Platforms Specialisation: An Industry overview of Open Banking | `bdc8f4f7-8042-4dba-988c-8e7bbdf1c666` | `certificate/65034644` | ✅ Verified |

## Full Accredible Image URLs

All URLs follow the pattern: `https://api.accredible.com/v1/frontend/credential_website_embed_image/{type}/{id}`

1. **Rearchitecting the Financial System**
   - Full URL: `https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/106770521`
   - Credential Page: `https://www.credential.net/1b158799-77b9-4257-9ef3-43750f6af0df#acc.LNGqF3XZ`

2. **Online Certificate for Fintech in Africa**
   - Full URL: `https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/76213120`
   - Credential Page: `https://www.credential.net/e891e773-399f-4aaa-8a82-ad27d42c0cdc#acc.lbIY1U8X`

3. **Navigating Digital Transformation**
   - Full URL: `https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/66417423`
   - Credential Page: `https://www.credential.net/93f935aa-dffc-48c7-8483-3ceca2981138#acc.5jpv2gIL`

4. **Open Banking & Platforms Specialisation: Technology and Security**
   - Full URL: `https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/66266530`
   - Credential Page: `https://www.credential.net/c2b0d7f9-aefe-4f77-8b0f-2d6dd42c0647#acc.K1yjdlm5`

5. **Open Banking and Platforms in Finance Specialisation**
   - Full URL: `https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/66267705`
   - Credential Page: `https://www.credential.net/7a245f36-ca0f-433b-9285-e3935bc306bc#acc.EUg8lyoL`

6. **Open Banking & Platforms Specialisation: Regulations Standards and Operational Risks**
   - Full URL: `https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/65933379`
   - Credential Page: `https://www.credential.net/016064a7-a7e2-4125-afb5-a2e4574043ce#acc.R5AEspZ4`

7. **Open Banking & Platforms Specialisation: Business Models and Transformation of Incumbents**
   - Full URL: `https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/65508518`
   - Credential Page: `https://www.credential.net/7bb20d15-4c70-4fdc-bda4-c6480dd45ac8#acc.HC7tx1qL`

8. **Card Payment Networks Explained**
   - Full URL: `https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/65540085`
   - Credential Page: `https://www.credential.net/1be9c933-91fc-42c6-93fc-6a3de7015756#acc.NX6mChHT`

9. **Open Banking & Platforms Specialisation: Business Models and Implementation of New Entrants**
   - Full URL: `https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/65292890`
   - Credential Page: `https://www.credential.net/b170e197-4e1d-4421-9421-ac6e186369d1#acc.eD7sjSB0`

10. **Open Banking & Platforms Specialisation: An Industry overview of Open Banking**
    - Full URL: `https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/65034644`
    - Credential Page: `https://www.credential.net/bdc8f4f7-8042-4dba-988c-8e7bbdf1c666#acc.kVfRCgI0`

## Implementation Notes

- All Accredible certificates use direct image URLs from the Accredible API
- Images are loaded using Next.js `Image` component with proper domain configuration
- The `next.config.js` file includes `api.accredible.com` in `images.remotePatterns`
- Each certificate has a unique Accredible image URL (no duplicates)
- Badges use `/badge/` endpoint, certificates use `/certificate/` endpoint

## Non-Accredible Certificates

The following certificates use local image files (not Accredible):

- **Master of Business Administration (MBA)** - `/images/certificates/mba-certificate.JPG`
- **Bachelor of Engineering: Civil & Environmental Engineering** - `/images/certificates/engineering-degree.JPG`
- **Operations Certificate** - `/images/certificates/operations-cert.JPG`
- **AI Bootcamp Certificate** - `/images/certificates/aibootcamp-cert.png`

## Last Updated

All mappings verified and documented: December 2024
