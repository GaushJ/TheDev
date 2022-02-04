import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { playlistId } from '../Data'
import ReactPlayer from 'react-player/youtube'
import { Audio } from 'react-loader-spinner'




//Youtube playlist api
const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlistItems";



const VideoComponent = () => {

  //retrieving parameters from the url
  let params = useParams()
  console.log(params);
  //getting coursename from parameter
  let modifiedParams = params.coursename

  const [videoId, setVideoId] = useState("")
  const [videoTitle, setVideoTitle] = useState("")
  const [courseData, setCourseData] = useState([])
  const [counter, setCounter] = useState(0)
  const watched = (videoId) => {
    if (localStorage.getItem("saveID")) {
      if (JSON.parse(localStorage.getItem("saveID")).includes(videoId)) {
        return true
      }
    }
    return false
  }

  //retrieving playlist info from youtube api
  useEffect(() => {
    const getItems = async () => {
      fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=${playlistId[modifiedParams][0].id}&maxResults=100&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
        .then(res => res.json())
        .then(data => {
          let result = data.items.map(item => {
            return { title: item.snippet.title, videoId: item.snippet.resourceId.videoId }
          })
          setCourseData(result)
          setVideoId(result[0].videoId)
          setVideoTitle(result[0].title)
        })
    }
    getItems();
  }
    , [])

  return (
    <>
      <div className='flex flex-row'>

        {/* SideBar */}
        <div className="md:flex w-1/5  h-screen hidden">
          <div className=" overflow-y-scroll w-full bg-white border-r-2 shadow-md rounded-sm">
            <div className="flex flex-col p-2 items-center">

              <div className="relative  text-lg font-medium flex justify-center  w-full">
                <div className="relative bg-purple-300 rounded-sm text-center text-purple-700 p-2 ">{modifiedParams.toUpperCase()}</div>
              </div>

              <div className="text-center w-11/12 p-2 font-medium text-xl text-gray-600">
                <ul className='flex flex-col justify-center'>
                  {courseData.map((item, index) => {
                    return (
                      <li>
                        <div
                          onClick={() => {
                            setVideoId(item.videoId)
                            setVideoTitle(item.title)
                            setCounter(index)
                          }}
                          className={counter === index ? 'relative flex mb-2 p-2 transition duration-300 bg-blue-400 text-blue-700 rounded-sm cursor-pointer' : 'relative  flex mb-2 p-2 transition duration-300 bg-green-400 text-green-700 rounded-sm cursor-pointer'}  >
                          <span className="mr-6 text-lg">Tutorial #{index + 1}</span>
                          {
                            watched(item.videoId) ? <div className='absolute right-2'>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                              : <div></div>
                          }

                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* Main content */}
        <div className='md:w-4/5 md:h-screen  md:overflow-y-scroll'>

          <div className='text-xl md:text-2xl flex text-center justify-center m-2'>
            {videoTitle}
          </div>
          <div className=' player-wrapper relative mx-20  bg-red-300'>
            <ReactPlayer
              className='react-player absolute h-20'
              url={`https://www.youtube.com/watch?v=${videoId}`}
              width='100%'
              height='100%'
              controls={true}

              //saving the the state in the localstorage
              onEnded={() => {
                if (localStorage.getItem("saveID")) {
                  let data = JSON.parse(localStorage.getItem("saveID"))
                  localStorage.setItem("saveID", JSON.stringify([...data, videoId]))
                } else {
                  //saving the video state if not saved
                  localStorage.setItem("saveID", JSON.stringify([videoId]))
                }
              }}
            />
            
          </div>
          <ul className='flex flex-col justify-center md:hidden'>
                  {courseData.map((item, index) => {
                    return (
                      <li>
                        <div
                          onClick={() => {
                            setVideoId(item.videoId)
                            setVideoTitle(item.title)
                            setCounter(index)
                          }}
                          className={counter === index ? 'relative  mx-10 my-2  p-2 md:mx-0 flex md:mb-2 transition duration-300 bg-blue-400 text-blue-700 rounded-sm cursor-pointer' : 'relative mx-10 md:mx-0 md:mb-2 flex mb-2 p-2 transition duration-300 bg-green-400 text-green-700 rounded-sm cursor-pointer'}  >
                          <span className="mr-6 text-lg">Tutorial #{index + 1}</span>
                          {
                            watched(item.videoId) ? <div className='absolute right-2'>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                              : <div></div>
                          }

                        </div>
                      </li>
                    )
                  })}
                </ul>
        </div>


      </div>
    </>

  )


};

export default VideoComponent;


