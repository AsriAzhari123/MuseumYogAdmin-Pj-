import React from 'react';
import StarImage from "/src/assets/star.png";
import EditIcon from "/src/assets/icons/edit-icon-white.png";

const ReviewCard = ({reviewData, onReply}) => {
    const totalBintang = parseInt(reviewData.totalBintang);

    return (
        <div className='flex flex-col shadow-custom-shadow py-10 px-8 rounded space-y-5'>
            <div className='flex flex-row space-x-5 items-top '>
                <img src={reviewData.image} alt="" className='w-[100px] h-[100px] rounded-full'/>
                <div className='flex flex-col justify-start items-top space-y-3' >
                    <h1 className='font-bold text-[20px] text-black'>
                        {reviewData.nama}
                    </h1>
                    <p className='font-light text-[16px] text-gray-500'>
                        {reviewData.tanggalKomentar}
                    </p>
                </div>
            </div>
            <div className='flex flex-row space-x-3'>
                {Array.from({length: totalBintang}).map((_, idx) => (
                    <img src={StarImage} alt="" className='w-[40px] h-[40px]' />
                ))}
            </div>
            <p> 
                {reviewData.komentar}
            </p>
            <div className='flex flex-row justify-end items-center' onClick={onReply}>
                <div className='flex flex-row items-center space-x-5 w-[140px] bg-[#728969] px-5 py-4 rounded-[8px] text-white hover:cursor-pointer'>
                    <img src={EditIcon} alt="" />
                    <h1>Reply</h1>
                </div>
            </div>
        </div>
    );
}
export default ReviewCard;