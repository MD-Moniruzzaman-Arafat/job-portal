export default function JobCardLoader() {
  return (
    <>
      <article class="card p-6 " id="loading-skeleton">
        <div class="flex flex-col md:flex-row gap-4">
          <div class="shrink-0">
            <div class="h-16 w-16 skeleton"></div>
          </div>
          <div class="flex-1 space-y-3">
            <div class="space-y-2">
              <div class="h-6 skeleton w-2/3"></div>
              <div class="h-4 skeleton w-1/2"></div>
            </div>
            <div class="h-4 skeleton w-full"></div>
            <div class="flex gap-2">
              <div class="h-6 skeleton w-20"></div>
              <div class="h-6 skeleton w-20"></div>
              <div class="h-6 skeleton w-20"></div>
            </div>
            <div class="flex justify-between items-center pt-2">
              <div class="h-4 skeleton w-32"></div>
              <div class="flex gap-2">
                <div class="h-10 skeleton w-28"></div>
                <div class="h-10 skeleton w-28"></div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
