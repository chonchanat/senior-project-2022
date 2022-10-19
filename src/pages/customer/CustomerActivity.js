import { Navbar } from '../../components/Navbar'
import Block from '../../components/Block';
import { MobileList } from '../../components/Table';
import { SearchWithIcon } from '../../components/Search';

import fakeData from '../../fakeData/fakeData';

function customerActivity() {
    return (
        <div>
            <Navbar />
            <Block>
                <SearchWithIcon />
                <div className="overflow-hidden overflow-y-auto">
                    {fakeData.map((data, index) => {
                        return (
                            <MobileList MyActivity={data} index={index} />
                        );
                    })}
                </div>
            </Block>
        </div>
    );
}

export default customerActivity;