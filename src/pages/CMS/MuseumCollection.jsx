import {React, useState} from 'react';
import MuseumCardCollection from '../../components/MuseumCollectionCard';
import MuseumCollectionData from '../../dataSample/MuseumCollectionData';
import AddInfoCollection from '../../components/AddInfoCollection';
import EditInfoCollection from '../../components/EditInfoCollection';


const MuseumCollectionScreen = () => {
    const [isAddData, setIsAddData] = useState(false);
    const [isEditData, setIsEditData] = useState(false);

    const handleAddData = () => {
        setIsAddData(true)
    };

    const handleCloseAddData = () => {
        setIsAddData(false);
    };

    const handleEditData = () => {
        setIsEditData(true);
    }

    const handleCloseEditData = () => {
        setIsEditData(false);
    }

    return (
        <>
            <div className="flex-1 overflow-y-auto ml-[260px] bg-[#F8F8F8] h-screen">
                <div className='flex flex-col space-y-8'>
                    <div className='flex flex-row justify-between items-center'>
                        <h1 className='font-bold text-black text-[24px]'>
                            Museum Collection
                        </h1>
                        <button 
                            className='bg-[#7F9275] rounded-[8px] text-white px-5 py-3'
                            onClick={handleAddData}    
                        >
                            +   Add Museum Collection
                        </button>
                    </div>
                    <MuseumCardCollection data={MuseumCollectionData} onEdit={handleEditData}/>
                </div>
                {isAddData && (
                    <div className="fixed pl-[260px] pt-[190px] inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-50 overflow-y-auto">
                        <AddInfoCollection onClose={handleCloseAddData}/>
                    </div>
                )}
                {isEditData && (
                    <div className="fixed pl-[260px] pt-[190px] inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-50 overflow-y-auto">
                        <EditInfoCollection onClose={handleCloseEditData}/>
                    </div>
                )}
            </div>
        </>
    )
}

export default MuseumCollectionScreen;