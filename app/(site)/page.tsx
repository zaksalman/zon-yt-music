
import PagePadding from '@/components/PagePadding';
import { dummyPlaylistArray, getPlaylistById } from '@/lib/dummyData'
import React from 'react'
import Category from "./components/Category";
import UserIcon from "@/components/UserIcon";
import PlayListCarousel from "@/components/PlayListCarousel";

const page = async () => {

  const dummyPlaylistArray1 = [...dummyPlaylistArray];
  const dummyPlaylistArray2 = [await getPlaylistById(1)];
  const dummyPlaylistArray3 = [await getPlaylistById(2)];
  const dummyPlaylistArray4 = [await getPlaylistById(3)];

return (
  <PagePadding>
    <div className="min-h-[600px]">
      <div className="mt-9"></div>
      <Category/>
      <div className="mt-12"></div>
      <PlayListCarousel
        playlistArray={[...dummyPlaylistArray1]}
        Thumbnail={
          <div className="w-[56px] h-[56px]">
            <UserIcon size={"lg"}/>
          </div>
        },
        title="다시 듣기"
        subTitle="도도"
      />
        
      
    </div>
  </PagePadding>
  
  )
}

export default page
