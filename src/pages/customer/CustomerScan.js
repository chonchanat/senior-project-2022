import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Navbar } from '../../components/Navbar';
import { BlockMobile } from '../../components/Block'
import { CardWithHead } from '../../components/Card';
import { Button } from '../../components/Button';

import fakeData from '../../fakeData/fakeData';

function CustomerScan() {

    const navigate = useNavigate();

    const [numCustomer, setNumCustomer] = useState(1);

    function handlerNumCustomer(operation) {
        if (operation === "increase") {
            setNumCustomer(numCustomer + 1);
        } else if (operation === "decrease" && numCustomer > 0) {
            setNumCustomer(numCustomer - 1);
        }
    }

    function handlerCancel() {
        navigate('/customer-home');
    }

    return (
        <div> 
            <Navbar />
            <BlockMobile>
                <CardWithHead title={"จองคิวกิจกรรม"} bgColor={"#F8F8F8"}>
                    <div className="flex flex-col items-center">
                        <p className="text-xl font-bold py-2">{fakeData[0].nameOfAct}</p>
                        <div className="pt-4 h-[150px] w-[180px] overflow-hidden">
                            <img src={fakeData[0].image} alt="img of activity" />
                        </div>
                        <p className="mt-6 text-sm">จำนวนผู้เข้าร่วม</p>
                        <div className="flex mt-4 bg-gray-200 rounded-lg h-[40px] items-center">
                            <div className="mx-[16px] w-[28px] h-[28px] text-center border-[1px] border-gray-300 rounded-full" onClick={() => handlerNumCustomer("decrease")}>
                                -
                            </div>
                            <div className="w-[100px] text-center border-[1px] rounded-lg border-gray-300 font-bold">
                                {numCustomer}
                            </div>
                            <div className="mx-[16px] w-[28px] h-[28px] text-center border-[1px] border-gray-300 rounded-full" onClick={() => handlerNumCustomer("increase")}>
                                +
                            </div>
                        </div>
                        <p className="mt-4 text-xs">สิทธิเข้าร่วมที่เหลือ {"5"} คน</p>
                        <div className="flex w-[220px] justify-between mt-8 mb-4">
                            <Button bgColor="bg-accept" width="w-[100px]">ตกลง</Button>
                            <Button bgColor="bg-decline" width="w-[100px]" click={handlerCancel}>ยกเลิก</Button>
                        </div>
                    </div>
                </CardWithHead>
            </BlockMobile>
        </div>
    );
}

export default CustomerScan;