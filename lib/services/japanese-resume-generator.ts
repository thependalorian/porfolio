/**
 * Japanese Resume Generator Service
 * 
 * Purpose: Generate Japanese resume sections using AI
 * Location: /lib/services/japanese-resume-generator.ts
 * 
 * Uses Groq/OpenAI/Anthropic API directly (not Yukio API)
 * Follows prompt structure from Yukio codebase
 * Priority: Groq > OpenAI > Anthropic
 */

interface RirekishoSections {
  職務要約: string // Job Summary - 200-300 words
  活用できる経験・知識・スキル: string[] // 3 bullet points
  職務経歴: string // Work History summary
  技術スキル: string // Technical Skills
  資格: string // Qualifications
  自己PR: string // Self-PR
  語学力: string // Language Skills
  志望動機: string // Motivation
}

interface ShokumuKeirekishoSections {
  経歴要約: string // Personal History Summary - 200-300 characters
  職務内容: string // Work History - detailed
  活用できる経験・知識・スキル: string // Qualifications, Knowledge, Skills
  自己PR: string // Self-PR - STAR method
}

export async function generateRirekisho(
  resumeData: string,
  jobTitle?: string,
  companyName?: string,
  jobDescription?: string
): Promise<RirekishoSections> {
  // Build prompt based on Yukio's structure
  const jobContext = buildJobContext(jobTitle, companyName, jobDescription)
  
  const prompt = `Based on the following resume information, create a Japanese rirekisho (履歴書) document.

RESUME INFORMATION:
${resumeData}

JOB CONTEXT:
${jobContext || 'General job application'}

⚠️ CRITICAL: ALL content MUST be in JAPANESE (日本語), not English, Thai, or any other language.
Use proper business Japanese format (敬語).

Please provide the following sections in Japanese business format (敬語):
1. 職務要約 (Job Summary) - 200-300 words describing work experience, strengths, and how you can contribute
2. 活用できる経験・知識・スキル (Experience, knowledge, and skills) - 3 bullet points
3. 職務経歴 (Work History) - List ALL positions from the resume in chronological order (most recent first). Include company name, job title, and period for EACH position. Do NOT use "など" (etc.) or summarize - list every position explicitly.
4. 技術スキル (Technical Skills) - Computer skills, software, programming languages
5. 資格 (Qualifications) - Certifications and licenses
6. 自己PR (Self-PR) - Specific examples demonstrating skills, motivation, and enthusiasm
7. 語学力 (Language Skills) - Japanese proficiency level (include JLPT if applicable)
8. 志望動機 (Motivation) - Why you want to work in Japan/for this company

Format your response as JSON with these exact keys:
{
  "職務要約": "...",
  "活用できる経験・知識・スキル": ["...", "...", "..."],
  "職務経歴": "...",
  "技術スキル": "...",
  "資格": "...",
  "自己PR": "...",
  "語学力": "...",
  "志望動機": "..."
}`

  // Support Groq, OpenAI, and Anthropic
  // Priority: Groq > OpenAI > Anthropic (Groq is fast and cost-effective)
  const groqKey = process.env.GROQ_API_KEY
  const openAIKey = process.env.OPENAI_API_KEY
  const anthropicKey = process.env.ANTHROPIC_API_KEY
  
  const useGroq = !!groqKey && !groqKey.includes('your-') && !groqKey.includes('placeholder')
  const useOpenAI = !!openAIKey && !openAIKey.includes('your-') && !openAIKey.includes('placeholder')
  const useAnthropic = !!anthropicKey && !anthropicKey.includes('your-') && !anthropicKey.includes('placeholder')

  const provider = useGroq ? 'groq' : useOpenAI ? 'openai' : useAnthropic ? 'anthropic' : null

  if (!provider) {
    throw new Error('Either GROQ_API_KEY, OPENAI_API_KEY, or ANTHROPIC_API_KEY environment variable must be set')
  }

  let data: any

  if (provider === 'groq') {
    // Call Groq API (OpenAI-compatible, very fast)
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${groqKey}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile', // Fast and good for Japanese (updated model)
        messages: [
          {
            role: 'system',
            content: 'You are an expert in creating Japanese resumes (履歴書). You always respond in Japanese (日本語) using proper business format (敬語). Always respond with valid JSON only, no markdown formatting.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        response_format: { type: 'json_object' },
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(`Groq API error: ${response.statusText} - ${JSON.stringify(errorData)}`)
    }

    data = await response.json()
  } else if (provider === 'anthropic') {
    // Call Anthropic API
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': anthropicKey!,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 4096,
        system: 'You are an expert in creating Japanese resumes (履歴書). You always respond in Japanese (日本語) using proper business format (敬語). Always respond with valid JSON only, no markdown formatting.',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(`Anthropic API error: ${response.statusText} - ${JSON.stringify(errorData)}`)
    }

    const anthropicData = await response.json()
    const contentText = anthropicData.content[0].text
    
    // Parse JSON (remove markdown code blocks if present)
    const jsonMatch = contentText.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      throw new Error('Failed to parse JSON from Anthropic response')
    }
    data = { choices: [{ message: { content: jsonMatch[0] } }] }
  } else {
    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${openAIKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o', // or 'gpt-4-turbo' for better Japanese
        messages: [
          {
            role: 'system',
            content: 'You are an expert in creating Japanese resumes (履歴書). You always respond in Japanese (日本語) using proper business format (敬語).',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        response_format: { type: 'json_object' },
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(`OpenAI API error: ${response.statusText} - ${JSON.stringify(errorData)}`)
    }

    data = await response.json()
  }

  const content = JSON.parse(data.choices[0].message.content)
  
  return content as RirekishoSections
}

export async function generateShokumuKeirekisho(
  resumeData: string,
  jobTitle?: string,
  companyName?: string,
  jobDescription?: string
): Promise<ShokumuKeirekishoSections> {
  const jobContext = buildJobContext(jobTitle, companyName, jobDescription)
  
  const prompt = `Based on the following resume information, create a Japanese shokumu-keirekisho (職務経歴書) document.

RESUME INFORMATION:
${resumeData}

JOB CONTEXT:
${jobContext || 'General job application'}

⚠️ CRITICAL: ALL content MUST be in JAPANESE (日本語), not English, Thai, or any other language.
Use proper business Japanese format (敬語).

Please provide the following sections in Japanese business format (敬語):
1. 経歴要約 (Personal History Summary) - 200-300 characters, career overview, key achievements
2. 職務内容 (Work History) - Reverse chronological order, detailed responsibilities, quantifiable results
3. 活用できる経験・知識・スキル (Qualifications, Knowledge, Skills) - Organized by category
4. 自己PR (Self-PR) - Use STAR method, connect to job requirements

Format your response as JSON with these exact keys:
{
  "経歴要約": "...",
  "職務内容": "...",
  "活用できる経験・知識・スキル": "...",
  "自己PR": "..."
}`

  // Support Groq, OpenAI, and Anthropic
  // Priority: Groq > OpenAI > Anthropic (Groq is fast and cost-effective)
  const groqKey = process.env.GROQ_API_KEY
  const openAIKey = process.env.OPENAI_API_KEY
  const anthropicKey = process.env.ANTHROPIC_API_KEY
  
  const useGroq = !!groqKey && !groqKey.includes('your-') && !groqKey.includes('placeholder')
  const useOpenAI = !!openAIKey && !openAIKey.includes('your-') && !openAIKey.includes('placeholder')
  const useAnthropic = !!anthropicKey && !anthropicKey.includes('your-') && !anthropicKey.includes('placeholder')

  const provider = useGroq ? 'groq' : useOpenAI ? 'openai' : useAnthropic ? 'anthropic' : null

  if (!provider) {
    throw new Error('Either GROQ_API_KEY, OPENAI_API_KEY, or ANTHROPIC_API_KEY environment variable must be set')
  }

  let data: any

  if (provider === 'groq') {
    // Call Groq API (OpenAI-compatible, very fast)
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${groqKey}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile', // Fast and good for Japanese (updated model)
        messages: [
          {
            role: 'system',
            content: 'You are an expert in creating Japanese work history documents (職務経歴書). You always respond in Japanese (日本語) using proper business format (敬語). Always respond with valid JSON only, no markdown formatting.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        response_format: { type: 'json_object' },
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(`Groq API error: ${response.statusText} - ${JSON.stringify(errorData)}`)
    }

    data = await response.json()
  } else if (provider === 'anthropic') {
    // Call Anthropic API
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': anthropicKey!,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 4096,
        system: 'You are an expert in creating Japanese work history documents (職務経歴書). You always respond in Japanese (日本語) using proper business format (敬語). Always respond with valid JSON only, no markdown formatting.',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(`Anthropic API error: ${response.statusText} - ${JSON.stringify(errorData)}`)
    }

    const anthropicData = await response.json()
    const contentText = anthropicData.content[0].text
    
    // Parse JSON (remove markdown code blocks if present)
    const jsonMatch = contentText.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      throw new Error('Failed to parse JSON from Anthropic response')
    }
    data = { choices: [{ message: { content: jsonMatch[0] } }] }
  } else {
    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${openAIKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: 'You are an expert in creating Japanese work history documents (職務経歴書). You always respond in Japanese (日本語) using proper business format (敬語).',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        response_format: { type: 'json_object' },
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(`OpenAI API error: ${response.statusText} - ${JSON.stringify(errorData)}`)
    }

    data = await response.json()
  }

  const content = JSON.parse(data.choices[0].message.content)
  
  return content as ShokumuKeirekishoSections
}

function buildJobContext(
  jobTitle?: string,
  companyName?: string,
  jobDescription?: string
): string {
  let context = ''
  if (jobTitle) context += `Target Position: ${jobTitle}\n`
  if (companyName) context += `Target Company: ${companyName}\n`
  if (jobDescription) context += `Job Requirements:\n${jobDescription}\n`
  return context
}
