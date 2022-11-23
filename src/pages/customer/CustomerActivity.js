import { Navbar } from '../../components/Navbar'
import { BlockMobile } from '../../components/Block';
import { MobileList } from '../../components/Table';
import { SearchWithIcon } from '../../components/Search';

import fakeData from '../../fakeData/fakeData';

function customerActivity() {
    return (
        <div>
            <Navbar />
            <BlockMobile>
                <SearchWithIcon />
                <div className="overflow-hidden overflow-y-auto">
                    {fakeData.map((data, index) => {
                        return (
                            <MobileList MyActivity={data} index={index} />
                        );
                    })}
                </div>
            </BlockMobile>
        </div>
    );
}

export default customerActivity;