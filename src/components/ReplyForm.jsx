import React, { useState } from "react";
import CloseIcon from "/src/assets/icons/close-icon.png";

const ReplyForm = ({onSave, onCancle}) => {
    const [reply, setReply] = useState('');
    
    return (
        <>
            <div className="flex flex-col bg-white rounded-[8px] w-[700px] px-10 py-11 mb-[50px] space-y-4">
                <div className="flex flex-row justify-end">
                    <img src={CloseIcon} alt="" onClick={onCancle} className="hover:cursor-pointer p-0 w-[50px] h-[50px]"/>
                </div>
                <div className="flex flex-col border border-black rounded-[8px] py-8 space-y-7">
                    <h1 className="font-bold text-black text-[20px] mx-5">Reply</h1>
                    <textarea 
                        value={reply} 
                        onChange={(e) => setReply(e.target.value)} 
                        placeholder="apa yang kamu pikirkan?"
                        className="h-[300px] mx-5 border-[#A5C399] border p-4 resize-none rounded-[8px] focus:outline-none"
                    />
                    <div className="flex flex-row justify-end mx-5">
                        <button className="bg-[#728969] text-white px-5 py-3 rounded-[8px]" onClick={onSave}>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReplyForm;