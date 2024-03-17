import React from 'react';

const NewsYoutubeCard = () => {
    return (
        <div className=" rounded-lg shadow-md m-4 max-sm:ms-0 text-[#9D9D9D] font-medium text-xs">
            {/* <img className="w-full h-64 object-cover rounded-lg" src="thumbnail.jpg" alt="Healthcare video" /> */}
            <div className='w-full rounded-t-lg'>
                <iframe className='w-full rounded-t-lg' src="https://www.youtube.com/embed/4zDBeuqOYQo?si=xYf-ugaKpDzPBgLh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className='p-4'>
                <h2 className="text-xs text-[#07879A]">Get to know the information regarding our
                    healthcare aspects </h2>
                <p className="mt-2">0</p>
                <div className='flex justify-between'>
                    <p>Jan 18 2024</p>
                    <p>Play</p>
                </div>
            </div>
        </div>
    );
};

export default NewsYoutubeCard;
