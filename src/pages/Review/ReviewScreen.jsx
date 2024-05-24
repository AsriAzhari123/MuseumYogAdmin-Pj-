import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import UserSampleAccount from "../../dataSample/UserAccount";
import ReviewCard from '../../components/ReviewCard';
import ReviewData from '../../dataSample/ReviewData';
import ReplyForm from '../../components/ReplyForm';

const ReviewScreen = () => {
    const [isReply, setIsReply] = useState(false);

    const handleReply = () => {
        setIsReply(true);
    }

    const doneReply = () => {
        setIsReply(false);
    }

    return (
        <>
           <div className='flex flex-col h-screen'>
                <Navbar user={UserSampleAccount[0]}/>
                <Sidebar />
                <div className='flex flex-col flex-1 overflow-y-auto overflow-x-hidden px-10 space-y-5'>
                    <div className='flex flex-col justify-start ml-[260px] mt-[120px] mb-[100px] space-y-5'>
                        <h1 className='font-bold text-black text-[32px]'>
                            Reviews
                        </h1>
                        <div className='flex flex-col space-y-5'>
                            {ReviewData.map((review, index) => 
                                <ReviewCard key={index} reviewData={review} onReply={handleReply}/>
                            )}
                        </div>
                    </div>
                    {isReply && (
                        <div className="fixed pl-[260px] pt-[190px] inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-50 overflow-y-auto">
                            <ReplyForm onCancle={doneReply} onSave={doneReply} />
                        </div>
                    )}
                </div>
           </div>
        </>
    );
}

export default ReviewScreen;