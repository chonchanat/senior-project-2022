function StarRating({ rating }) {
    return (
        <div className="flex">
            {[...Array(5)].map((star, index) => {
                return (
                    <div key={index}>
                        <img className={index < rating ? "" : "hidden"} src="https://img.icons8.com/emoji/16/000000/star-emoji.png" alt="rating star" />
                        <img className={index >= rating ? "" : "hidden"} src="https://img.icons8.com/ios/16/000000/star--v1.png" alt="rating star" />
                    </div>
                );
            })}
        </div>
    );
}

function MobileList({ MyActivity, index }) {
    return (
        <div className="py-2 flex h-fit border-b-2 border-[#E0E0E0] hover:bg-hover" key={index} onClick={() => console.log(MyActivity)}>
            <div className="h-auto w-[30%] overflow-hidden flex items-center">
                <img src={MyActivity.image} alt="iamge of activity" />
            </div>
            <div className="w-[70%] pl-4">
                <p className="font-bold">{MyActivity.nameOfAct}</p>
                <div className="flex">
                    <StarRating rating={MyActivity.rating} />
                </div>
                <div className="flex justify-between mt-4">
                    <div>
                        <p className="text-xs">เวลาโดยประมาณ</p>
                        <p className="text-sm">{MyActivity.predTime} นาที</p>
                    </div>
                    <div>
                        <p className="text-xs">จำนวนคิว</p>
                        <p className="text-sm text-right">{MyActivity.prevQueue} คิว</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { MobileList };