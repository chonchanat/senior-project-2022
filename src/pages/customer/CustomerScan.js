import { useState } from 'react';

import { Navbar } from '../../components/Navbar';
import { BlockMobile } from '../../components/Block'
import { CardWithHead } from '../../components/Card';
import { Button } from '../../components/Button';

import fakeData from '../../fakeData/fakeData';

function CustomerScan() {

    const [numCustomer, setNumCustomer] = useState(1);

    function handlerNumCustomer(operation) {
        if (operation === "increase") {
            setNumCustomer(numCustomer + 1);
        } else if (operation === "decrease" && numCustomer > 0) {
            setNumCustomer(numCustomer - 1);
        }
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
                            <div className="w-[60px] text-center" onClick={() => handlerNumCustomer("increase")}>
                                +
                            </div>
                            <div className="w-[100px] text-center border-r-2 border-l-2 border-gray-400">
                                {numCustomer}
                            </div>
                            <div className="w-[60px] text-center" onClick={() => handlerNumCustomer("decrease")}>
                                -
                            </div>
                        </div>
                        <p className="mt-4 text-xs">สิทธิเข้าร่วมที่เหลือ {"5"} คน</p>
                        <div className="flex w-[220px] justify-between mt-8 mb-4">
                            <Button title="ตกลง" bgColor="bg-accept" w="w-[100px]" />
                            <Button title="ยกเลิก" bgColor="bg-decline" w="w-[100px]" />
                        </div>
                    </div>
                </CardWithHead>
            </BlockMobile>
        </div>
    );
}

export default CustomerScan;