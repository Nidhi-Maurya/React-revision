import { CDN_URL } from "../../utils/constant";

export default function RestaurentItemList({ items }) {
  

  return (
    <>
      <div className="">
        {items.map((item) => (




          <div
            key={item.card.info.id}
            className="p-2 m-2 border border-gray-500 rounded-xl"
          >
            <div classname="flex w-9/12">
              <div className=" flex flex-col items-start justify-between">
                <span className="font-semibold"> {item.card.info.name}</span>
                <span className=" font-semibold">
                  {" "}
                  Rs: {item.card.info.price / 100}
                </span>

                <h3> {item.card.info.offer}</h3>
              </div>

              <p className="text-sm">{item.card.info.description}</p>
            </div>
            <div>
              <img  src={CDN_URL + item.card.info.imageId} alt={item.card.info.name} className="w-14 h-14" />
              <button className="p-2 m-2 bg-white shadow-lg ">Add</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
