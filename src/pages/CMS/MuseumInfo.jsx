import React from "react";
import LocationIcon from "/src/assets/icons/location-icon.png";

const MuseumInformation = () => {
    return (
        <>
            <div className="flex flex-col mx-10">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="text-black font-[700] text-[30px]">Museum Information</h1>
                    <button>
                        Edit
                    </button>
                </div>
                <div>
                    <h1 className="text-black font-[500] text-[26px]">Nama Museum</h1>
                    <p className="text-[#5B6D54] font-[400] text-[16px]"> Museum Keraton Ngayogyakarta Hadiningrat</p>
                </div>
                <div>
                    <h1 className="text-black font-[500] text-[26px]">
                        Gambar Museum
                    </h1>
                    <div>

                    </div>
                </div>
                <div>
                    <h1 className="text-black font-[500] text-[26px]">Alamat Museum</h1>
                    <div>
                        <img src={LocationIcon} alt="" />
                        <p className="text-[#5B6D54] font-[400] text-[16px]">Jl. Rotowijayan, Kadipaten, Kecamatan Kraton, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55132</p>
                    </div>
                </div>
                <div>
                    <h1 className="text-black font-[500] text-[26px]">Operasional Museum</h1>
                    <div>
                        <img src="" alt="" />
                        <p className="text-[#5B6D54] font-[400] text-[16px]">Buka setiap hari: 08.00 - 13.30 WIB <br /> Khusus hari jumat: 08.00 - 13.00 WIB <br />Libur pada upacara kebesaran Keraton
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <h1 className="text-black font-[500] text-[26px]">Fasilitas Museum</h1>
                        <div>
                            <img src="" alt="" />
                            <p className="text-[#5B6D54] font-[400] text-[16px]">Toilet duduk dan jongkok</p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p className="text-[#5B6D54] font-[400] text-[16px]">Mushola</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-black font-[500] text-[26px]">Transport Museum</h1>
                        <div>
                            <img src="" alt="" />
                            <p className="text-[#5B6D54] font-[400] text-[16px]">Stasiun Yogyakarta</p>
                            <p className="text-[#5B6D54] font-[400] text-[16px]">200m</p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p className="text-[#5B6D54] font-[400] text-[16px]">Stasiun Lempuyangan</p>
                            <p className="text-[#5B6D54] font-[400] text-[16px]">300m</p>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}

export default MuseumInformation