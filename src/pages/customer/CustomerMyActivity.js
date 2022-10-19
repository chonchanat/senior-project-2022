import { Navbar } from '../../components/Navbar';
import Block from '../../components/Block';
import { MobileList } from '../../components/Table';

import fakeData from '../../fakeData/fakeData';

function CustomerMyActivity() {
    return (
        <div>
            <Navbar />
            <Block>
                <p className="text-right text-sm">กิจกรรมที่จอง 4/5</p>
                {fakeData.map((data, index) => {
                    return (
                        <MobileList MyActivity={data} index={index}/>
                    );
                })}
            </Block>
        </div>
    );
}

export default CustomerMyActivity;