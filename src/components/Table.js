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
        <div className="px-2 py-3 flex hover:bg-hover" key={index}>
            <div className="h-full w-2/5 overflow-hidden">
                <img src={MyActivity.image} alt="iamge of activity" />
            </div>
            <div className="w-3/5 pl-4">
                <p className="font-bold">{MyActivity.nameOfAct}</p>
                <div className="flex">
                    <StarRating rating={MyActivity.rating} />
                    {/* <img src="https://img.icons8.com/emoji/16/000000/star-emoji.png" alt="rating star"/> */}
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