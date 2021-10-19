import React from "react";
import PlaysFilters from "../Components/PlaysFilters/PlaysFilters";
import Poster from "../Components/Poster/Poster";

const Plays = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="w-full lg:flex lg:flex-row-reverse">
          <div className="lg:w-8/12">
            <h2 className="text-2xl font-bold mb-4">Plays in Mumbai</h2>
            <div className="flex flex-wrap">
              <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314717-xevgbwqkxe-portrait.jpg"
                  title="Prison Games"
                  subtitle="English/Hindi ₹499"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314717-xevgbwqkxe-portrait.jpg"
                  title="Prison Games"
                  subtitle="English/Hindi ₹499"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314717-xevgbwqkxe-portrait.jpg"
                  title="Prison Games"
                  subtitle="English/Hindi ₹499"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314717-xevgbwqkxe-portrait.jpg"
                  title="Prison Games"
                  subtitle="English/Hindi ₹499"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314717-xevgbwqkxe-portrait.jpg"
                  title="Prison Games"
                  subtitle="English/Hindi ₹499"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314717-xevgbwqkxe-portrait.jpg"
                  title="Prison Games"
                  subtitle="English/Hindi ₹499"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314717-xevgbwqkxe-portrait.jpg"
                  title="Prison Games"
                  subtitle="English/Hindi ₹499"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314717-xevgbwqkxe-portrait.jpg"
                  title="Prison Games"
                  subtitle="English/Hindi ₹499"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/4">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div className="flex flex-col gap-4">
              <PlaysFilters title="Date" tags={["Today", "Tomorrow", "This Weekend"]}/>
              <PlaysFilters title="Language" tags={["English", "Hindi"]}/>
              <PlaysFilters title="Categories" tags={["Theatre", "Experimental"]}/>
              <PlaysFilters title="Genres" tags={["Comedy", "Drama"]}/>
              <PlaysFilters title="More Filters" tags={["Online Streaming", "Outdoor Events"]}/>
              <PlaysFilters title="Price" tags={["Free", "0-500", "501-2000", "Above 2000"]}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plays;
