export default function IAFlowPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-[#EF3688] mb-8">Information Architecture Flow</h1>
      <p className="text-gray-700 mb-12 text-lg">
        This page shows how carers navigate through our services — by who they are (Lane A) or what they need to do (Lane B).
      </p>
      
      <div className="bg-white border-2 border-gray-200 p-8 rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Lane A - By Carer Type */}
          <div>
            <div className="bg-[#EF3688] text-white p-4 rounded-t-lg">
              <h2 className="text-white">Lane A: By Carer Type</h2>
            </div>
            <div className="border-2 border-[#EF3688] border-t-0 rounded-b-lg p-6 space-y-6">
              {/* Young Carers */}
              <div className="bg-[#FFF0F7] p-4 rounded-lg">
                <h3 className="text-[#EF3688] mb-3">Young Carers (0–18)</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-[#EF3688]">→</span>
                    <span>Get a carer&apos;s assessment</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#EF3688]">→</span>
                    <span>Breaks & respite</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#EF3688]">→</span>
                    <span>Emergency help</span>
                  </div>
                </div>
              </div>

              {/* Parent Carers */}
              <div className="bg-[#FFF0F7] p-4 rounded-lg">
                <h3 className="text-[#EF3688] mb-3">Parent Carers</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-[#EF3688]">→</span>
                    <span>Get a carer&apos;s assessment</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#EF3688]">→</span>
                    <span>Money & benefits</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#EF3688]">→</span>
                    <span>Breaks & respite</span>
                  </div>
                </div>
              </div>

              {/* Adult Carers */}
              <div className="bg-[#FFF0F7] p-4 rounded-lg">
                <h3 className="text-[#EF3688] mb-3">Adult Carers (18+)</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-[#EF3688]">→</span>
                    <span>Get a carer&apos;s assessment</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#EF3688]">→</span>
                    <span>Work/study & rights</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#EF3688]">→</span>
                    <span>Health & wellbeing</span>
                  </div>
                </div>
              </div>

              {/* Universal Offer */}
              <div className="bg-[#FFF0F7] p-4 rounded-lg">
                <h3 className="text-[#EF3688] mb-3">Universal Offer</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-[#EF3688]">→</span>
                    <span>After caring</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#EF3688]">→</span>
                    <span>Work/study & rights</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#EF3688]">→</span>
                    <span>Useful contacts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lane B - By Task */}
          <div>
            <div className="bg-[#EF3688] text-white p-4 rounded-t-lg">
              <h2 className="text-white">Lane B: By Task</h2>
            </div>
            <div className="border-2 border-[#EF3688] border-t-0 rounded-b-lg p-6">
              <div className="space-y-3">
                {[
                  { task: 'Get a carer\'s assessment', tags: ['YC', 'PC', 'AC'] },
                  { task: 'Money & benefits', tags: ['PC', 'AC'] },
                  { task: 'Breaks & respite', tags: ['YC', 'PC', 'AC'] },
                  { task: 'Health & wellbeing', tags: ['AC', 'UO'] },
                  { task: 'Work/study & rights', tags: ['AC', 'UO'] },
                  { task: 'Emergency help', tags: ['YC', 'PC', 'AC'] },
                  { task: 'Useful contacts', tags: ['YC', 'PC', 'AC', 'UO'] },
                  { task: 'After caring', tags: ['UO'] }
                ].map((item, index) => (
                  <div key={index} className="border border-gray-200 p-3 rounded hover:border-[#EF3688] transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-900">{item.task}</span>
                      <div className="flex gap-1">
                        {item.tags.map((tag, idx) => (
                          <span key={idx} className="inline-block px-2 py-1 text-xs bg-[#FFF0F7] text-[#EF3688] rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="text-gray-900 mb-4">Tag Legend</h3>
          <div className="flex flex-wrap gap-4 text-sm">
            <div><span className="inline-block px-2 py-1 bg-[#FFF0F7] text-[#EF3688] rounded mr-2">YC</span>Young Carers</div>
            <div><span className="inline-block px-2 py-1 bg-[#FFF0F7] text-[#EF3688] rounded mr-2">PC</span>Parent Carers</div>
            <div><span className="inline-block px-2 py-1 bg-[#FFF0F7] text-[#EF3688] rounded mr-2">AC</span>Adult Carers</div>
            <div><span className="inline-block px-2 py-1 bg-[#FFF0F7] text-[#EF3688] rounded mr-2">UO</span>Universal Offer</div>
          </div>
        </div>
      </div>
    </div>
  );
}