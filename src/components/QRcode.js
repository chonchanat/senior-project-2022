import StaffData from '../fakeData/StaffData';
import ActivityData from '../fakeData/ActivityData';

import { QRCodeSVG } from 'qrcode.react';

import { CardWithHead } from './Card';

function QRcode() {
    const bookData = {
        name: StaffData[0].name,
        id: StaffData[0].id,
        role: StaffData[0].role,
        activityId: ActivityData[0].id,
        activityName: ActivityData[0].name,
        numberOfBook: 4,
        status: true,
    }
    return (
        <div>
            <CardWithHead title="กิจกรรม">
                <p className="font-bold">{ActivityData[0].name}</p>
                <QRCodeSVG
                    value={JSON.stringify(bookData)}
                    size={224}
                    bgColor={"#FFFFFF"}
                    fgColor={"#000000"}
                    level={"L"}
                    includeMargin={true}
                />
                <div className="mt-4">
                    <p className="">จำนวนผู้เข้าร่วม : <label className="text-accept">{bookData.numberOfBook}</label> คน</p>
                    <p className="mt-2">สถานะ : <label className={`${bookData.status ? "text-accept" : "text-decline"}`}>{bookData.status? "ถึงคิวของคุณแล้ว" : "ไม่ยังถึงคิวของคุณ"}</label></p>
                    <p className="text-sm mt-6 text-decline">*กรุณายื่น QR-code ให้พนักงานแสกนก่อนเข้าร่วมกิจกรรม*</p>
                </div>
            </CardWithHead>
        </div>
    );
}

export default QRcode;