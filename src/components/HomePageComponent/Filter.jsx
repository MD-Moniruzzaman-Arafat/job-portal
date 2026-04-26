export default function Filter() {
  return (
    <>
      <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-border border-gray-200">
        <span class="text-sm font-medium text-muted-foreground mr-2">
          Filters:
        </span>

        {/* <!-- Job Type Dropdown --> */}
        <div class="dropdown">
          <button
            class="btn btn-outline text-xs h-8 px-3 flex items-center"
            onclick="toggleDropdown('jobTypeDropdown')"
          >
            Job Type
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-down-icon lucide-chevron-down ml-2 h-3 w-3"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <div id="jobTypeDropdown" class="dropdown-content card p-2">
            <div class="space-y-1">
              <label class="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                <input type="checkbox" class="rounded border-input" />
                <span class="text-sm">Full-time</span>
              </label>
              <label class="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                <input type="checkbox" class="rounded border-input" />
                <span class="text-sm">Part-time</span>
              </label>
              <label class="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                <input type="checkbox" class="rounded border-input" />
                <span class="text-sm">Contract</span>
              </label>
              <label class="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                <input type="checkbox" class="rounded border-input" />
                <span class="text-sm">Internship</span>
              </label>
            </div>
          </div>
        </div>

        {/* <!-- Experience Level Dropdown --> */}
        <div class="dropdown">
          <button
            class="btn btn-outline text-xs h-8 px-3 flex items-center"
            onclick="toggleDropdown('experienceDropdown')"
          >
            Experience Level
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-down-icon lucide-chevron-down ml-2 h-3 w-3"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <div id="experienceDropdown" class="dropdown-content card p-2">
            <div class="space-y-1">
              <label class="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                <input type="checkbox" class="rounded border-input" />
                <span class="text-sm">Entry Level</span>
              </label>
              <label class="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                <input type="checkbox" class="rounded border-input" />
                <span class="text-sm">Mid Level</span>
              </label>
              <label class="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                <input type="checkbox" class="rounded border-input" />
                <span class="text-sm">Senior Level</span>
              </label>
              <label class="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                <input type="checkbox" class="rounded border-input" />
                <span class="text-sm">Lead/Principal</span>
              </label>
            </div>
          </div>
        </div>

        {/* <!-- Salary Range Dropdown --> */}
        <div class="dropdown">
          <button
            class="btn btn-outline text-xs h-8 px-3 flex items-center"
            onclick="toggleDropdown('salaryDropdown')"
          >
            Salary Range
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-down-icon lucide-chevron-down ml-2 h-3 w-3"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <div id="salaryDropdown" class="dropdown-content card p-2">
            <div class="space-y-1">
              <label class="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                <input type="checkbox" class="rounded border-input" />
                <span class="text-sm">$0 - $50k</span>
              </label>
              <label class="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                <input type="checkbox" class="rounded border-input" />
                <span class="text-sm">$50k - $100k</span>
              </label>
              <label class="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                <input type="checkbox" class="rounded border-input" />
                <span class="text-sm">$100k - $150k</span>
              </label>
              <label class="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                <input type="checkbox" class="rounded border-input" />
                <span class="text-sm">$150k+</span>
              </label>
            </div>
          </div>
        </div>

        {/* <!-- Skills Dropdown --> */}
        <div class="dropdown">
          <button
            class="btn btn-outline text-xs h-8 px-3 flex items-center"
            onclick="toggleDropdown('skillsDropdown')"
          >
            Skills
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-down-icon lucide-chevron-down ml-2 h-3 w-3"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <div id="skillsDropdown" class="dropdown-content card p-2">
            <div class="space-y-1">
              <label class="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                <input type="checkbox" class="rounded border-input" />
                <span class="text-sm">React</span>
              </label>
              <label class="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                <input type="checkbox" class="rounded border-input" />
                <span class="text-sm">Node.js</span>
              </label>
              <label class="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                <input type="checkbox" class="rounded border-input" />
                <span class="text-sm">Python</span>
              </label>
              <label class="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                <input type="checkbox" class="rounded border-input" />
                <span class="text-sm">TypeScript</span>
              </label>
            </div>
          </div>
        </div>

        <button class="btn btn-ghost text-xs h-8 px-3 text-muted-foreground hover:text-foreground">
          Clear All
        </button>
      </div>
    </>
  );
}
