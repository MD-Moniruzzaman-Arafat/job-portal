export default function Filter() {
  return (
    <>
      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border border-gray-200">
        <span className="text-sm font-medium text-muted-foreground mr-2">
          Filters:
        </span>

        {/* <!-- Job Type Dropdown --> */}
        <div className="dropdown">
          <button className="btn btn-outline text-xs h-8 px-3 flex items-center">
            Job Type
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down-icon lucide-chevron-down ml-2 h-3 w-3"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <div id="jobTypeDropdown" className="dropdown-content card p-2">
            <div className="space-y-1">
              <label className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                <input type="checkbox" className="rounded border-input" />
                <span className="text-sm">Full-time</span>
              </label>
              <label className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                <input type="checkbox" className="rounded border-input" />
                <span className="text-sm">Part-time</span>
              </label>
              <label className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                <input type="checkbox" className="rounded border-input" />
                <span className="text-sm">Contract</span>
              </label>
              <label className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                <input type="checkbox" className="rounded border-input" />
                <span className="text-sm">Internship</span>
              </label>
            </div>
          </div>
        </div>

        {/* <!-- Experience Level Dropdown --> */}
        <div className="dropdown">
          <button className="btn btn-outline text-xs h-8 px-3 flex items-center">
            Experience Level
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down-icon lucide-chevron-down ml-2 h-3 w-3"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <div id="experienceDropdown" className="dropdown-content card p-2">
            <div className="space-y-1">
              <label className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                <input type="checkbox" className="rounded border-input" />
                <span className="text-sm">Entry Level</span>
              </label>
              <label className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                <input type="checkbox" className="rounded border-input" />
                <span className="text-sm">Mid Level</span>
              </label>
              <label className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                <input type="checkbox" className="rounded border-input" />
                <span className="text-sm">Senior Level</span>
              </label>
              <label className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                <input type="checkbox" className="rounded border-input" />
                <span className="text-sm">Lead/Principal</span>
              </label>
            </div>
          </div>
        </div>

        {/* <!-- Salary Range Dropdown --> */}
        <div className="dropdown">
          <button className="btn btn-outline text-xs h-8 px-3 flex items-center">
            Salary Range
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down-icon lucide-chevron-down ml-2 h-3 w-3"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <div id="salaryDropdown" className="dropdown-content card p-2">
            <div className="space-y-1">
              <label className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                <input type="checkbox" className="rounded border-input" />
                <span className="text-sm">$0 - $50k</span>
              </label>
              <label className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                <input type="checkbox" className="rounded border-input" />
                <span className="text-sm">$50k - $100k</span>
              </label>
              <label className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                <input type="checkbox" className="rounded border-input" />
                <span className="text-sm">$100k - $150k</span>
              </label>
              <label className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                <input type="checkbox" className="rounded border-input" />
                <span className="text-sm">$150k+</span>
              </label>
            </div>
          </div>
        </div>

        {/* <!-- Skills Dropdown --> */}
        <div className="dropdown">
          <button className="btn btn-outline text-xs h-8 px-3 flex items-center">
            Skills
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down-icon lucide-chevron-down ml-2 h-3 w-3"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <div id="skillsDropdown" className="dropdown-content card p-2">
            <div className="space-y-1">
              <label className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                <input type="checkbox" className="rounded border-input" />
                <span className="text-sm">React</span>
              </label>
              <label className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                <input type="checkbox" className="rounded border-input" />
                <span className="text-sm">Node.js</span>
              </label>
              <label className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                <input type="checkbox" className="rounded border-input" />
                <span className="text-sm">Python</span>
              </label>
              <label className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                <input type="checkbox" className="rounded border-input" />
                <span className="text-sm">TypeScript</span>
              </label>
            </div>
          </div>
        </div>

        <button className="btn btn-ghost text-xs h-8 px-3 text-muted-foreground hover:text-foreground">
          Clear All
        </button>
      </div>
    </>
  );
}
