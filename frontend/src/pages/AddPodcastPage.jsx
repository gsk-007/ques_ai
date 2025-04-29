import { BsRssFill } from "react-icons/bs";
import { FaSquareYoutube } from "react-icons/fa6";
import { RiFolderUploadFill } from "react-icons/ri";
import { MdOutlineCloudUpload } from "react-icons/md";
import CustomModal from "../components/CustomModal";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { usePodcast } from "../contexts/PodcastContext";
import { useNavigate, useParams } from "react-router";
import PodcastsList from "../components/PodcastsList";
import { FaArrowLeft } from "react-icons/fa";

const AddPodcastOptions = [
  {
    id: 1,
    title: "RSS Feed",
    description: "lorem ipsum dolor sit. Dolor lorem sit.",
    icon: <BsRssFill size={50} />,
  },
  {
    id: 2,
    title: "YouTube Video",
    description: "lorem ipsum dolor sit. Dolor lorem sit.",
    icon: <FaSquareYoutube size={50} />,
  },
  {
    id: 3,
    title: "Upload Files",
    description: "lorem ipsum dolor sit. Dolor lorem sit.",
    icon: <RiFolderUploadFill size={50} />,
  },
];

const AddPodcastPage = () => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [modalHeading, setModalHeading] = useState("");
  const [modalData, setModalData] = useState({
    name: "",
    transcript: "",
  });

  const { projectId } = useParams();
  const navigate = useNavigate();

  const { podcasts, createPodcast, getPodcasts } = usePodcast();

  useEffect(() => {
    getPodcasts(projectId);
  }, [projectId]);

  const handleOptionClick = (data) => {
    setIsUploadModalOpen(true);
    if (data.id == 1) {
      setModalHeading("Upload From RSS Feed");
    } else if (data.id == 2) {
      setModalHeading("Upload from Youtube");
    } else if (data.id == 3) {
      setModalHeading("Upload from Files");
    }
  };

  const handleCancel = () => {
    setIsUploadModalOpen(false);
  };

  const handleUpload = () => {
    if (!modalData.name || !modalData.transcript) {
      toast.error("name and transcript are required");
      return;
    }
    createPodcast(modalData.name, modalData.transcript, projectId);
    setModalData({
      name: "",
      transcript: "",
    });
    setIsUploadModalOpen(false);
  };
  return (
    <>
      <div>
        <div className="flex gap-4 items-center">
          <FaArrowLeft
            onClick={() => navigate(-1)}
            className="cursor-pointer"
            size={30}
          />
          <h2 className="text-4xl font-bold">Add Podcast</h2>
        </div>
        <div className="flex gap-2 my-8 ">
          {AddPodcastOptions.map((item) => (
            <div
              onClick={() => handleOptionClick(item)}
              key={item.id}
              className="w-1/3 mx-auto bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row"
            >
              <div className="flex flex-col justify-center p-6 md:w-2/3">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-lg">{item.description}</p>
              </div>
              <div className="md:w-1/3 flex items-center justify-center">
                {item.icon}
              </div>
            </div>
          ))}
        </div>
        {podcasts.length == 0 ? (
          <div className="w-11/12 h-[40vh] mx-auto bg-white rounded-2xl shadow-md  flex flex-col items-center justify-center">
            <div>
              <MdOutlineCloudUpload className="text-purple-600" size={100} />
            </div>
            <div className="text-center">
              <p className="text-xl">
                Select a file or drag and drop here (Podcast media or
                Transcription Text)
              </p>
              <p className="text-gray-600">
                MP4, MOV, MP3, WAV, PDF, DOCX or TXT file
              </p>
            </div>
            <button className="mt-4 px-6 py-2 border-2 border-purple-600 text-purple-600 rounded-full font-semibold transition-all duration-300 hover:bg-purple-600 hover:text-white">
              Select File
            </button>
          </div>
        ) : (
          <div>
            <PodcastsList podcasts={podcasts} />
          </div>
        )}
      </div>

      <CustomModal isOpen={isUploadModalOpen}>
        <h2 className="text-3xl">{modalHeading}</h2>
        <div className="mt-4">
          <label htmlFor="name" className="block">
            Name
          </label>
          <input
            type="text"
            value={modalData.name}
            onChange={(e) =>
              setModalData({ ...modalData, name: e.target.value })
            }
            className="p-1 mt-2 border border-black w-full"
          />
        </div>
        <div className="mt-2">
          <label htmlFor="Transcript" className="block">
            Transcript
          </label>
          <textarea
            name="transcript"
            value={modalData.transcript}
            onChange={(e) =>
              setModalData({ ...modalData, transcript: e.target.value })
            }
            className="p-2 h-[100px] mt-2  border border-black w-full"
          />
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={handleCancel}
            className="px-6 mr-2 py-2 border-2 bg-white text-red-600 border-red-500 rounded-2xl font-semibold transition-all duration-300 hover:bg-red-500 hover:text-white"
          >
            Cancel
          </button>
          <button
            onClick={handleUpload}
            className="px-6 py-2 border-2 bg-black text-white rounded-2xl font-semibold transition-all duration-300"
          >
            Upload
          </button>
        </div>
      </CustomModal>
    </>
  );
};

export default AddPodcastPage;
