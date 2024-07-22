"use client";
import React from 'react'
import usePlayerState from "@/hooks/usePlayerState";
import { IoMdPlayCircle } from 'react-icons/io';

const PlayListNav = ({playlist}) => {
  const { addSongList } = usePlayerState();
  const { id, owner, playlistName, songList} = playlist;

  const onClickPlay = () => {
    addSongList(songList);
  }

  return (

    <div>
      //TODO
    </div>
  )
}

export default PlayListNav
