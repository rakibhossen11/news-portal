const allNews = document.getElementById('all-news');
    data.forEach((singleNews) =>{
        const card = document.createElement('div');
        card.innerHTML = `
        <div class="card lg:card-side bg-base-100 shadow-xl mt-5">
                <figure><img src="https://picsum.photos/200" alt="Album"/></figure>
                <div class="card-body">
                  <h2 class="card-title">Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h2>
                  <p>Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News)  U.S. President Joe Biden has ...</p>
                    <div class="flex gap-7 items-center justify-between">
                          <div class="flex gap-7 items-center">
                            <div class="avatar">
                                <div class="w-24 rounded-full">
                                  <img src="https://picsum.photos/200" />
                                </div>
                              </div>
                              <div>
                                <p>Jimmy Dane</p>
                                <p><span>2022-08-24</span> <span>17:27:34</span></p>
                              </div>
                          </div>
                          <button class="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        `;
        allNews.appendChild(card);
    });