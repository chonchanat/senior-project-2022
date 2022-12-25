import { Navbar } from '../../components/Navbar'
import { BlockMobile } from '../../components/Block'

import QRcode from '../../components/QRcode';

function CustomerBookQueue() {
    return (
        <div>
            <Navbar />
            <BlockMobile>
                <QRcode />
            </BlockMobile>
        </div>
    );
}

export default CustomerBookQueue;