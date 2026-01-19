/**
 * Japanese Resume Viewer Component
 * 
 * Purpose: Display Japanese resume sections in formatted layout
 * Location: /components/features/resume/JapaneseResumeViewer.tsx
 * 
 * Features:
 * - Formatted display of all resume sections
 * - Japan-inspired typography (Noto Sans JP)
 * - Print-friendly styling
 * - Responsive layout
 */

'use client'

interface JapaneseResumeViewerProps {
  resume: {
    id: string
    resumeType: 'rirekisho' | 'shokumu-keirekisho'
    sections: Record<string, any>
    jobTitle?: string | null
    companyName?: string | null
  }
  documentType: 'rirekisho' | 'shokumu-keirekisho'
}

export function JapaneseResumeViewer({ resume, documentType }: JapaneseResumeViewerProps) {
  const sections = resume.sections

  return (
    <div className="japanese-resume-viewer" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
      {/* Job Context (if available) */}
      {(resume.jobTitle || resume.companyName) && (
        <div className="mb-6 p-4 bg-bg-secondary border border-border-light rounded-lg">
          {resume.jobTitle && (
            <p className="text-sm text-black">
              <span className="font-semibold">Target Position:</span> {resume.jobTitle}
            </p>
          )}
          {resume.companyName && (
            <p className="text-sm text-black">
              <span className="font-semibold">Target Company:</span> {resume.companyName}
            </p>
          )}
        </div>
      )}

      {/* Rirekisho Sections */}
      {documentType === 'rirekisho' && (
        <div className="space-y-6">
          {sections['職務要約'] && (
            <section>
              <h3 className="text-xl font-bold mb-2 border-b-2 border-spring-green pb-2 text-black font-act-title">
                職務要約 (Job Summary)
              </h3>
              <p className="text-base leading-relaxed whitespace-pre-wrap text-black">
                {typeof sections['職務要約'] === 'string' 
                  ? sections['職務要約']
                  : typeof sections['職務要約'] === 'object'
                  ? JSON.stringify(sections['職務要約'], null, 2)
                  : String(sections['職務要約'])}
              </p>
            </section>
          )}

          {sections['活用できる経験・知識・スキル'] && (
            <section>
              <h3 className="text-xl font-bold mb-2 border-b-2 border-spring-green pb-2 text-black font-act-title">
                活用できる経験・知識・スキル (Experience, Knowledge, Skills)
              </h3>
              <ul className="list-disc list-inside space-y-2">
                {Array.isArray(sections['活用できる経験・知識・スキル'])
                  ? sections['活用できる経験・知識・スキル'].map((item: any, idx: number) => (
                      <li key={idx} className="text-base text-black">
                        {typeof item === 'string' ? item : typeof item === 'object' ? JSON.stringify(item, null, 2) : String(item)}
                      </li>
                    ))
                    : <li className="text-base text-black">
                      {typeof sections['活用できる経験・知識・スキル'] === 'string'
                        ? sections['活用できる経験・知識・スキル']
                        : typeof sections['活用できる経験・知識・スキル'] === 'object'
                        ? JSON.stringify(sections['活用できる経験・知識・スキル'], null, 2)
                        : String(sections['活用できる経験・知識・スキル'])}
                    </li>}
              </ul>
            </section>
          )}

          {sections['職務経歴'] && (
            <section>
              <h3 className="text-xl font-bold mb-2 border-b-2 border-spring-green pb-2 text-black font-act-title">
                職務経歴 (Work History)
              </h3>
              <p className="text-base leading-relaxed whitespace-pre-wrap text-black">
                {typeof sections['職務経歴'] === 'string'
                  ? sections['職務経歴']
                  : typeof sections['職務経歴'] === 'object'
                  ? JSON.stringify(sections['職務経歴'], null, 2)
                  : String(sections['職務経歴'])}
              </p>
            </section>
          )}

          {sections['技術スキル'] && (
            <section>
              <h3 className="text-xl font-bold mb-2 border-b-2 border-spring-green pb-2 text-black font-act-title">
                技術スキル (Technical Skills)
              </h3>
              <p className="text-base leading-relaxed whitespace-pre-wrap text-black">
                {typeof sections['技術スキル'] === 'string'
                  ? sections['技術スキル']
                  : typeof sections['技術スキル'] === 'object'
                  ? JSON.stringify(sections['技術スキル'], null, 2)
                  : String(sections['技術スキル'])}
              </p>
            </section>
          )}

          {sections['資格'] && (
            <section>
              <h3 className="text-xl font-bold mb-2 border-b-2 border-spring-green pb-2 text-black font-act-title">
                資格 (Qualifications)
              </h3>
              <p className="text-base leading-relaxed whitespace-pre-wrap text-black">
                {typeof sections['資格'] === 'string'
                  ? sections['資格']
                  : typeof sections['資格'] === 'object'
                  ? JSON.stringify(sections['資格'], null, 2)
                  : String(sections['資格'])}
              </p>
            </section>
          )}

          {sections['自己PR'] && (
            <section>
              <h3 className="text-xl font-bold mb-2 border-b-2 border-spring-green pb-2 text-black font-act-title">
                自己PR (Self-PR)
              </h3>
              <p className="text-base leading-relaxed whitespace-pre-wrap text-black">
                {typeof sections['自己PR'] === 'string'
                  ? sections['自己PR']
                  : typeof sections['自己PR'] === 'object'
                  ? JSON.stringify(sections['自己PR'], null, 2)
                  : String(sections['自己PR'])}
              </p>
            </section>
          )}

          {sections['語学力'] && (
            <section>
              <h3 className="text-xl font-bold mb-2 border-b-2 border-spring-green pb-2 text-black font-act-title">
                語学力 (Language Skills)
              </h3>
              <p className="text-base leading-relaxed whitespace-pre-wrap text-black">
                {typeof sections['語学力'] === 'string'
                  ? sections['語学力']
                  : typeof sections['語学力'] === 'object'
                  ? JSON.stringify(sections['語学力'], null, 2)
                  : String(sections['語学力'])}
              </p>
            </section>
          )}

          {sections['志望動機'] && (
            <section>
              <h3 className="text-xl font-bold mb-2 border-b-2 border-spring-green pb-2 text-black font-act-title">
                志望動機 (Motivation)
              </h3>
              <p className="text-base leading-relaxed whitespace-pre-wrap text-black">
                {typeof sections['志望動機'] === 'string'
                  ? sections['志望動機']
                  : typeof sections['志望動機'] === 'object'
                  ? JSON.stringify(sections['志望動機'], null, 2)
                  : String(sections['志望動機'])}
              </p>
            </section>
          )}
        </div>
      )}

      {/* Shokumu-keirekisho Sections */}
      {documentType === 'shokumu-keirekisho' && (
        <div className="space-y-6">
          {sections['経歴要約'] && (
            <section>
              <h3 className="text-xl font-bold mb-2 border-b-2 border-spring-green pb-2 text-black font-act-title">
                経歴要約 (Personal History Summary)
              </h3>
              <p className="text-base leading-relaxed whitespace-pre-wrap text-black">
                {typeof sections['経歴要約'] === 'string'
                  ? sections['経歴要約']
                  : typeof sections['経歴要約'] === 'object'
                  ? JSON.stringify(sections['経歴要約'], null, 2)
                  : String(sections['経歴要約'])}
              </p>
            </section>
          )}

          {sections['職務内容'] && (
            <section>
              <h3 className="text-xl font-bold mb-2 border-b-2 border-spring-green pb-2 text-black font-act-title">
                職務内容 (Work History)
              </h3>
              <div className="text-base leading-relaxed whitespace-pre-wrap text-black">
                {typeof sections['職務内容'] === 'string'
                  ? <p>{sections['職務内容']}</p>
                  : typeof sections['職務内容'] === 'object'
                  ? <p>{JSON.stringify(sections['職務内容'], null, 2)}</p>
                  : <div>{String(sections['職務内容'])}</div>}
              </div>
            </section>
          )}

          {sections['活用できる経験・知識・スキル'] && (
            <section>
              <h3 className="text-xl font-bold mb-2 border-b-2 border-spring-green pb-2 text-black font-act-title">
                活用できる経験・知識・スキル (Qualifications, Knowledge, Skills)
              </h3>
              <p className="text-base leading-relaxed whitespace-pre-wrap text-black">
                {typeof sections['活用できる経験・知識・スキル'] === 'string'
                  ? sections['活用できる経験・知識・スキル']
                  : typeof sections['活用できる経験・知識・スキル'] === 'object'
                  ? JSON.stringify(sections['活用できる経験・知識・スキル'], null, 2)
                  : String(sections['活用できる経験・知識・スキル'])}
              </p>
            </section>
          )}

          {sections['自己PR'] && (
            <section>
              <h3 className="text-xl font-bold mb-2 border-b-2 border-spring-green pb-2 text-black font-act-title">
                自己PR (Self-PR)
              </h3>
              <p className="text-base leading-relaxed whitespace-pre-wrap text-black">
                {typeof sections['自己PR'] === 'string'
                  ? sections['自己PR']
                  : typeof sections['自己PR'] === 'object'
                  ? JSON.stringify(sections['自己PR'], null, 2)
                  : String(sections['自己PR'])}
              </p>
            </section>
          )}
        </div>
      )}
    </div>
  )
}
