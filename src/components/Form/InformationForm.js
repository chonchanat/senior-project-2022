import { useState } from 'react';

function InformationForm({ data }) {

    const [form, setForm] = useState({
        name: data.name,
        size: data.size,
        duration: data.duration,
        waitingTime: data.waitingTime,
        star: data.star,
    });

    return (
        <div className="flex h-[240px] px-10">
            <div className="w-[40%] flex justify-center items-center">
                <img src={data.image} alt="activity" width="250px" />
            </div>
            <div className="w-[60%]">
                <label className="flex justify-between items-center mb-4">ชื่อกิจกรรม
                    <input type="text" className="w-[70%] h-[36px] border-black rounded-md border px-6"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </label>
                <label className="flex justify-between items-center mb-4">จำนวนผู้เข้าร่วม
                    <div className="flex justify-between w-[70%]">
                        <input type="number" className="h-[36px] border-black rounded-md border px-6"
                            value={form.size}
                            onChange={(e) => setForm({ ...form, size: e.target.value })} />
                        <p className="w-20 flex justify-end items-center">คน/รอบ</p>
                    </div>
                </label>
                <label className="flex justify-between items-center mb-4">ระยะเวลาเล่น
                    <div className="flex justify-between w-[70%]">
                        <input type="number" className="h-[36px] border-black rounded-md border px-6"
                            value={form.duration}
                            onChange={(e) => setForm({ ...form, duration: e.target.value })} />
                        <p className="w-20 flex justify-end items-center">นาที/รอบ</p>
                    </div>
                </label>
                <label className="flex justify-between items-center mb-4">ระยะเวลารอ
                    <div className="flex justify-between w-[70%]">
                        <input type="number" className="h-[36px] border-black rounded-md border px-6"
                            value={form.waitingTime}
                            onChange={(e) => setForm({ ...form, waitingTime: e.target.value })} />
                        <p className="w-20 flex justify-end items-center">นาที</p>
                    </div>
                </label>
                <label className="flex justify-between items-center mb-4">จำนวนดาว
                    <div className="flex justify-between w-[70%]">
                        <input type="number" className="h-[36px] border-black rounded-md border px-6"
                            value={form.star}
                            onChange={(e) => setForm({ ...form, star: e.target.value })} />
                        <p className="w-20 flex justify-end items-center">ดวง/คน</p>
                    </div>
                </label>
            </div>
        </div>
    );
}

export default InformationForm;