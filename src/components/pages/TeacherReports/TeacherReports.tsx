import React from 'react';
import { Link } from 'react-router-dom';

export const TeacherReports: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-reports-bg-dark text-slate-900 dark:text-white font-lexend overflow-hidden flex h-screen w-full selection:bg-reports-primary selection:text-black transition-colors duration-200">
      
      {/* Side Navigation */}
      <aside className="hidden md:flex w-64 flex-col justify-between border-r border-white/5 bg-reports-bg-dark p-6 shrink-0 h-full overflow-y-auto">
        <div className="flex flex-col gap-8">
          {/* Branding */}
          <div className="flex items-center gap-3">
            <div 
              className="bg-center bg-no-repeat bg-cover rounded-full size-10 shadow-lg shadow-reports-primary/20" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAG6fjn238YjQAZC-Xf3APtmHTIrI4ZjgcQYx-gYSIseWSmPcKy_Ya58ckLrOujtPRzevvmi0YSnCSXCa5l-XDFccZyYpNX2NO65gjObzMKKEbjvt57Tr70N_QnXfdF_6MBlwtjlOYGu_1sMwuBBDNIveT_GEesPB5c0M9_rcLTSdf080CICnJp0L3BYD-nEhXCZGGU2MY7XFPsTSzhX6dKFoH8izugbdGPLOtQaM_PpBCGpWtjuZbjhDLZ493STW5fga3-ZGULP6Y")' }}
            ></div>
            <div className="flex flex-col">
              <h1 className="text-white text-lg font-bold leading-tight">GyaanSetu</h1>
              <p className="text-reports-text-sec text-xs font-normal">Teacher Portal</p>
            </div>
          </div>
          {/* Nav Items */}
          <div className="flex flex-col gap-2">
            <Link to="/teacher/dashboard" className="group flex items-center gap-3 px-4 py-3 rounded-full hover:bg-white/5 transition-colors duration-200">
              <span className="material-symbols-outlined text-reports-text-sec group-hover:text-white transition-colors">dashboard</span>
              <p className="text-reports-text-sec group-hover:text-white text-sm font-medium transition-colors">Dashboard</p>
            </Link>
            <Link to="/teacher/students" className="group flex items-center gap-3 px-4 py-3 rounded-full hover:bg-white/5 transition-colors duration-200">
              <span className="material-symbols-outlined text-reports-text-sec group-hover:text-white transition-colors">school</span>
              <p className="text-reports-text-sec group-hover:text-white text-sm font-medium transition-colors">Students</p>
            </Link>
            <Link to="/teacher/content" className="group flex items-center gap-3 px-4 py-3 rounded-full hover:bg-white/5 transition-colors duration-200">
              <span className="material-symbols-outlined text-reports-text-sec group-hover:text-white transition-colors">menu_book</span>
              <p className="text-reports-text-sec group-hover:text-white text-sm font-medium transition-colors">Lessons</p>
            </Link>
            <Link to="/teacher/reports" className="flex items-center gap-3 px-4 py-3 rounded-full bg-reports-primary/20 text-reports-primary border border-reports-primary/20">
              <span className="material-symbols-outlined material-symbols-filled">bar_chart</span>
              <p className="text-sm font-bold">Reports</p>
            </Link>
            <Link to="/teacher/settings" className="group flex items-center gap-3 px-4 py-3 rounded-full hover:bg-white/5 transition-colors duration-200">
              <span className="material-symbols-outlined text-reports-text-sec group-hover:text-white transition-colors">settings</span>
              <p className="text-reports-text-sec group-hover:text-white text-sm font-medium transition-colors">Settings</p>
            </Link>
          </div>
        </div>
        {/* Profile / Bottom */}
        <div className="flex items-center gap-3 px-2 mt-auto pt-6 border-t border-white/5">
          <div 
            className="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-white/10" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAbCpgCrCla5bO8Q_5uh1x6mlTli9AwwWkur0q-I3aUkSCIM_g3U4kkzaKSyarSoY5NGmB6cn0B7y-AN3flyiDiuRWSV0428mEsjFlT6t6p-UOi92fa2QG2Rz4LdJrFL78XoNl5y1A1Z2QLEAEY1rrIP_N13WG-SHgj3pHL43FKxF7vmMP-5psLQ5PLt3lPwh1pfOLWhUt80D68dJaDdbTTrMRNxFiQ899ohL8cwtxrcppWcc4eAGPBoaUdZr9_wQt4DzLd9d-ClDs")' }}
          ></div>
          <div className="flex flex-col overflow-hidden">
            <p className="text-white text-sm font-medium truncate">Mrs. Kaur</p>
            <p className="text-reports-text-sec text-xs truncate">Science Dept.</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between p-4 border-b border-white/5 bg-reports-bg-dark">
          <span className="material-symbols-outlined text-white">menu</span>
          <span className="text-white font-bold">Report Generation</span>
          <div 
            className="bg-center bg-no-repeat bg-cover rounded-full size-8" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB1t87K3_IBoo3jIw9pxxzOcZSTaepyjTl1uuEJb6qdI96NXS-xdo4C1Biro9OO5fjRR2r8QkDexwoBv1Kksg0FbHrIEKWZmUSAwXamzz5eileLtfuZW98aJoNLHvF2PyXKruaB5zSnH9WOvinkx7gFeisWqyrunJp1nWhuOrflKsM-CzrGjJ5yGX_tVAURsLFpfXt58sJvEdg7snKGvaEbSA5vc32FcnxZ8jSVzxwqQCII2QMHdSIMue5KOyeOUUFmK5odwPeM-bY")' }}
          ></div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-10 pb-20 scroll-smooth">
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="flex flex-col gap-1">
                <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white font-lexend">Report Generation</h1>
                <p className="text-reports-text-sec text-base md:text-lg font-lexend">Export insights for classes, students, and modules.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-reports-text-sec text-xs bg-white/5 px-3 py-1.5 rounded-full flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-reports-primary animate-pulse"></span>
                  Offline Mode Active • Synced 10m ago
                </span>
                <button className="flex items-center gap-2 bg-reports-surface-dark hover:bg-white/10 text-white px-4 py-2.5 rounded-full text-sm font-bold transition-colors border border-white/10">
                  <span className="material-symbols-outlined text-[18px]">sync</span>
                  Sync Data
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
              
              {/* Left Column: Configuration */}
              <div className="lg:col-span-7 flex flex-col gap-8">
                
                {/* Step 1: Report Type */}
                <section>
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-reports-primary text-black text-xs font-bold">1</span>
                    Select Report Type
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {/* Option 1 */}
                    <label className="cursor-pointer group relative">
                      <input defaultChecked className="peer sr-only" name="report_type" type="radio"/>
                      <div className="h-full p-4 rounded-xl bg-reports-surface-dark border-2 border-transparent peer-checked:border-reports-primary peer-checked:bg-reports-primary/5 transition-all hover:bg-white/5 flex flex-col gap-3">
                        <div className="p-2 w-fit rounded-full bg-white/10 text-reports-primary group-hover:bg-reports-primary group-hover:text-black peer-checked:bg-reports-primary peer-checked:text-black transition-colors">
                          <span className="material-symbols-outlined block">school</span>
                        </div>
                        <div>
                          <p className="text-white font-bold text-sm">Class Performance</p>
                          <p className="text-reports-text-sec text-xs mt-1">Aggregate scores & attendance</p>
                        </div>
                      </div>
                    </label>
                    {/* Option 2 */}
                    <label className="cursor-pointer group relative">
                      <input className="peer sr-only" name="report_type" type="radio"/>
                      <div className="h-full p-4 rounded-xl bg-reports-surface-dark border-2 border-transparent peer-checked:border-reports-primary peer-checked:bg-reports-primary/5 transition-all hover:bg-white/5 flex flex-col gap-3">
                        <div className="p-2 w-fit rounded-full bg-white/10 text-reports-primary group-hover:bg-reports-primary group-hover:text-black transition-colors">
                          <span className="material-symbols-outlined block">person</span>
                        </div>
                        <div>
                          <p className="text-white font-bold text-sm">Student Progress</p>
                          <p className="text-reports-text-sec text-xs mt-1">Individual learning tracks</p>
                        </div>
                      </div>
                    </label>
                    {/* Option 3 */}
                    <label className="cursor-pointer group relative">
                      <input className="peer sr-only" name="report_type" type="radio"/>
                      <div className="h-full p-4 rounded-xl bg-reports-surface-dark border-2 border-transparent peer-checked:border-reports-primary peer-checked:bg-reports-primary/5 transition-all hover:bg-white/5 flex flex-col gap-3">
                        <div className="p-2 w-fit rounded-full bg-white/10 text-reports-primary group-hover:bg-reports-primary group-hover:text-black transition-colors">
                          <span className="material-symbols-outlined block">extension</span>
                        </div>
                        <div>
                          <p className="text-white font-bold text-sm">Module Usage</p>
                          <p className="text-reports-text-sec text-xs mt-1">Lesson completion rates</p>
                        </div>
                      </div>
                    </label>
                  </div>
                </section>

                {/* Step 2: Configuration */}
                <section>
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-reports-surface-dark text-white text-xs font-bold ring-1 ring-white/20">2</span>
                    Configuration
                  </h2>
                  <div className="bg-reports-surface-dark rounded-xl p-5 md:p-6 flex flex-col gap-5 border border-white/5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-reports-text-sec ml-1">Class</label>
                        <div className="relative">
                          <select className="w-full bg-reports-bg-dark text-white border-0 ring-1 ring-white/10 rounded-full py-3 px-4 focus:ring-2 focus:ring-reports-primary focus:outline-none appearance-none cursor-pointer">
                            <option>Class 5A</option>
                            <option>Class 5B</option>
                            <option>Class 6A</option>
                          </select>
                          <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-reports-text-sec pointer-events-none">expand_more</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-reports-text-sec ml-1">Subject</label>
                        <div className="relative">
                          <select className="w-full bg-reports-bg-dark text-white border-0 ring-1 ring-white/10 rounded-full py-3 px-4 focus:ring-2 focus:ring-reports-primary focus:outline-none appearance-none cursor-pointer">
                            <option>All Subjects</option>
                            <option>Mathematics</option>
                            <option>Punjabi</option>
                            <option>English</option>
                            <option>Science</option>
                          </select>
                          <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-reports-text-sec pointer-events-none">expand_more</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-reports-text-sec ml-1">Date Range</label>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="relative">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-reports-text-sec text-[20px]">calendar_today</span>
                            <input className="w-full bg-reports-bg-dark text-white border-0 ring-1 ring-white/10 rounded-full py-3 pl-12 pr-4 focus:ring-2 focus:ring-reports-primary focus:outline-none placeholder-reports-text-sec" type="date" defaultValue="2023-10-01"/>
                          </div>
                          <div className="relative">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-reports-text-sec text-[20px]">calendar_today</span>
                            <input className="w-full bg-reports-bg-dark text-white border-0 ring-1 ring-white/10 rounded-full py-3 pl-12 pr-4 focus:ring-2 focus:ring-reports-primary focus:outline-none placeholder-reports-text-sec" type="date" defaultValue="2023-10-31"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Step 3: Format & Action */}
                <section>
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="flex flex-col gap-4 flex-1">
                      <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-reports-surface-dark text-white text-xs font-bold ring-1 ring-white/20">3</span>
                        Output Format
                      </h2>
                      <div className="flex gap-3">
                        <label className="cursor-pointer">
                          <input defaultChecked className="peer sr-only" name="format" type="radio"/>
                          <div className="px-5 py-2.5 rounded-full bg-reports-surface-dark border border-white/10 text-white text-sm font-medium peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span> PDF
                          </div>
                        </label>
                        <label className="cursor-pointer">
                          <input className="peer sr-only" name="format" type="radio"/>
                          <div className="px-5 py-2.5 rounded-full bg-reports-surface-dark border border-white/10 text-white text-sm font-medium peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">table_chart</span> CSV
                          </div>
                        </label>
                      </div>
                    </div>
                    <button className="bg-reports-primary hover:bg-reports-primary-dark text-black text-base font-bold px-8 py-4 rounded-full shadow-lg shadow-reports-primary/25 transition-all transform active:scale-95 flex items-center justify-center gap-2 min-w-[200px]">
                      <span className="material-symbols-outlined">auto_awesome</span>
                      Generate Report
                    </button>
                  </div>
                </section>
              </div>

              {/* Right Column: Preview & Recent */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                
                {/* Preview Card */}
                <div className="bg-reports-surface-dark rounded-xl border border-white/5 overflow-hidden flex flex-col h-fit">
                  <div className="p-5 border-b border-white/5 flex justify-between items-center bg-white/5">
                    <h3 className="text-white font-bold text-lg">Report Preview</h3>
                    <span className="text-xs uppercase tracking-wider font-bold text-reports-text-sec bg-black/20 px-2 py-1 rounded">Sample Data</span>
                  </div>
                  <div className="p-6 flex flex-col gap-6">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-reports-text-sec text-sm">Target Class</p>
                        <p className="text-white text-2xl font-black">Class 5A</p>
                      </div>
                      <div className="text-right">
                        <p className="text-reports-text-sec text-sm">Avg. Attendance</p>
                        <p className="text-reports-primary text-2xl font-black">82%</p>
                      </div>
                    </div>
                    {/* Dummy Chart Visualization */}
                    <div className="h-40 w-full flex items-end gap-2 justify-between px-2 pt-4 border-b border-white/10 pb-2 relative">
                      {/* Grid lines */}
                      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                        <div className="w-full h-px bg-white/5 border-t border-dashed border-white/10"></div>
                        <div className="w-full h-px bg-white/5 border-t border-dashed border-white/10"></div>
                        <div className="w-full h-px bg-white/5 border-t border-dashed border-white/10"></div>
                      </div>
                      {/* Bars */}
                      <div className="w-full bg-reports-primary/20 rounded-t-sm relative group" style={{ height: '40%' }}>
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">40%</div>
                      </div>
                      <div className="w-full bg-reports-primary/40 rounded-t-sm relative group" style={{ height: '65%' }}>
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">65%</div>
                      </div>
                      <div className="w-full bg-reports-primary rounded-t-sm relative group shadow-[0_0_15px_rgba(76,223,32,0.3)]" style={{ height: '85%' }}>
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white font-bold">85%</div>
                      </div>
                      <div className="w-full bg-reports-primary/60 rounded-t-sm relative group" style={{ height: '55%' }}>
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">55%</div>
                      </div>
                      <div className="w-full bg-reports-primary/30 rounded-t-sm relative group" style={{ height: '70%' }}>
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">70%</div>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-reports-text-sec uppercase tracking-wide font-medium">
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                    </div>
                  </div>
                  <div className="bg-black/20 p-4 text-xs text-reports-text-sec text-center">
                    This is a preview based on locally cached data.
                  </div>
                </div>

                {/* Recent Reports */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between px-2">
                    <h3 className="text-white font-bold text-lg">Recent Reports</h3>
                    <button className="text-reports-primary text-sm font-medium hover:text-white transition-colors">View All</button>
                  </div>
                  <div className="flex flex-col gap-3">
                    {/* Recent Item 1 */}
                    <div className="bg-reports-surface-dark hover:bg-white/5 transition-colors p-3 rounded-xl flex items-center justify-between group cursor-pointer border border-transparent hover:border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="bg-red-500/10 text-red-500 p-2 rounded-lg">
                          <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-white text-sm font-medium">Class_5A_Progress.pdf</p>
                          <p className="text-reports-text-sec text-xs">Generated today, 10:30 AM</p>
                        </div>
                      </div>
                      <button className="p-2 rounded-full text-reports-text-sec hover:text-white hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined text-[20px]">download</span>
                      </button>
                    </div>
                    {/* Recent Item 2 */}
                    <div className="bg-reports-surface-dark hover:bg-white/5 transition-colors p-3 rounded-xl flex items-center justify-between group cursor-pointer border border-transparent hover:border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="bg-green-500/10 text-green-500 p-2 rounded-lg">
                          <span className="material-symbols-outlined text-[20px]">table_chart</span>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-white text-sm font-medium">Module_Stats_Oct.csv</p>
                          <p className="text-reports-text-sec text-xs">Generated yesterday</p>
                        </div>
                      </div>
                      <button className="p-2 rounded-full text-reports-text-sec hover:text-white hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined text-[20px]">download</span>
                      </button>
                    </div>
                    {/* Recent Item 3 */}
                    <div className="bg-reports-surface-dark hover:bg-white/5 transition-colors p-3 rounded-xl flex items-center justify-between group cursor-pointer border border-transparent hover:border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="bg-red-500/10 text-red-500 p-2 rounded-lg">
                          <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-white text-sm font-medium">Student_Report_Rohan.pdf</p>
                          <p className="text-reports-text-sec text-xs">Generated Oct 24, 2023</p>
                        </div>
                      </div>
                      <button className="p-2 rounded-full text-reports-text-sec hover:text-white hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined text-[20px]">download</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
