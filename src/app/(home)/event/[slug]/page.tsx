import Image from "next/image";
import PrimaryButton from "~/app/ui/components/buttons/primary-button";
import { IoIosArrowBack } from "react-icons/io";

export default function EventDetails({ params }: { params: { slug: string } }) {
  // return <div>My Event: {params.slug}</div>;
  return (
    <div>
      <div
        className="hh-[50vh] relative flex w-[100%] flex-col items-center rounded-[10px] bg-cover bg-center px-[5%] py-[10%] md:flex-row"
        style={{
          backgroundImage: "url('/eventDetailsImage.png')",
        }}
      >
        <div className="absolute left-3 top-3">
          <button className="flex h-[30px] w-[70px] items-center justify-center gap-2 rounded-[5px] bg-pry text-white lg:h-[40px] lg:w-[80px]">
            <IoIosArrowBack />
            back
          </button>
        </div>

        <div className="text-white">
          <h3 className="text-3xl font-semibold md:text-5xl lg:text-6xl">
            Dream world wide in jakatra
          </h3>
          <h5 className="mb-3 mt-5 text-xl font-semibold md:text-2xl lg:text-3xl">
            IIIT Sonepat
          </h5>
          <p className="text-xs md:text-sm lg:text-base">
            DesignHub organized a 3D Modeling Workshop using Blender on 16th
            February at 5 PM. The workshop taught participants the magic of
            creating stunning 3D models and animations using Blender. It was
            suitable for both beginners and experienced users. The event was
            followed by a blender-render competition, which added to the
            excitement.
          </p>
          {/* <p>View map</p> */}
        </div>
        <div className="mt-12 w-full min-w-[250px] max-w-[400px] rounded-[10px] bg-white p-4 drop-shadow-lg lg:mt-0">
          <p>Date & time</p>
          <p className="my-3 text-xs text-grayText md:text-sm lg:text-base">
            Saturdat, March 18 2023, 9.30PM
          </p>
          <p className="text-xs text-pry md:text-sm lg:text-base">
            Add to calendar
          </p>
          <div className="mt-4 flex flex-col items-center gap-2">
            <PrimaryButton label={"Book now"} />
            <PrimaryButton label={"Program promoter"} bgClr={"bg-grayPlain"} />
            <p>No Refunds</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-orange-200 px-[10%] py-10 md:flex-row md:gap-[5%]">
        <div className="flex-1">
          <>
            <h4 className="mb-2 text-base font-semibold text-black md:text-xl lg:text-2xl">
              Description
            </h4>
            <p className="text-xs text-grayText md:text-sm lg:text-base">
              DesignHub organized a 3D Modeling Workshop using Blender on 16th
              February at 5 PM. The workshop taught participants the magic of
              creating stunning 3D models and animations using Blender. It was
              suitable for both beginners and experienced users. The event was
              followed by a blender-render competition, which added to the
              excitement. DesignHub organized a 3D Modeling Workshop using
              Blender on 16th February at 5 PM. The workshop taught participants
              the magic of creating stunning 3D models and animations using
              Blender. It was suitable for both beginners and experienced users.
              The event was followed by a blender-render competition, which
              added to the excitement.
            </p>
          </>
          <>
            <h4 className="mb-2 mt-6 text-base font-semibold text-black md:text-xl lg:text-2xl">
              Hours
            </h4>
            <p className="text-xs text-grayText md:text-sm lg:text-base">
              Weekdays hours:{" "}
              <span className="text-sm text-pry md:text-base lg:text-[18px]">
                7PM - 10PM
              </span>
            </p>
          </>
          <>
            <h4 className="mb-2 mt-6 text-base font-semibold text-black md:text-xl lg:text-2xl">
              Organizer Contact
            </h4>
            <p className="text-xs text-grayText md:text-sm lg:text-base">
              This is the organizer contact
            </p>
          </>
        </div>
        <div className="mt-6 w-full flex-1 bg-purple-500 md:mt-0">
          <>
            <h4 className="mb-2 text-base font-semibold text-black md:text-xl lg:text-2xl">
              Description
            </h4>
            <div>
              <Image src={"/map.png"} alt="map" width={480} height={260} />
              {/* <h6 className="mb-2 mt-6 text-base text-black md:text-xl lg:text-2xl">
                Dream world wide in jakatra
              </h6>
              <p className="text-grayText text-xs md:text-sm lg:text-base">
                Dummy location generation model by RSU ... Our approach
                generates more realistic dummy locations
              </p> */}
            </div>
          </>
          <>
            <h4 className="mb-2 mt-6 text-base font-semibold text-black md:text-xl lg:text-2xl">
              Tags
            </h4>
            <ul className="flex flex-wrap items-center gap-2">
              <li>Tag1</li>
              <li>Tag2</li>
              <li>Tag3</li>
            </ul>
          </>
          <>
            <h4 className="mb-2 mt-6 text-base font-semibold text-black md:text-xl lg:text-2xl">
              Share with friends
            </h4>
            <ul className="flex items-center gap-3">
              <li>
                <Image
                  src={"/facebook.svg"}
                  alt="facebook"
                  width={48}
                  height={48}
                />
              </li>
              <li>
                <Image
                  src={"/whatsapp.svg"}
                  alt="whatsapp"
                  width={48}
                  height={48}
                />
              </li>
              <li>
                <Image
                  src={"/linkedin.svg"}
                  alt="linkedin"
                  width={48}
                  height={48}
                />
              </li>
              <li>
                <Image src={"/x.svg"} alt="x" width={48} height={48} />
              </li>
            </ul>
          </>
        </div>
      </div>
    </div>
  );
}
