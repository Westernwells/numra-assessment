<div className="absolute left-0 z-10 w-[20%] max-w-[250px] bg-green-400 sm:static sm:w-full sm:px-[1%] md:px-[5%]">
  <div className="hh-[100px] flex items-center justify-center bg-white py-5">
    <Link
      href={"/"}
      className="hidden font-semibold text-pry sm:flex md:text-2xl"
    >
      Event Hive
    </Link>

    <button
      className="font-semibold text-pry sm:hidden md:text-2xl"
      onClick={() => {
        showSidebar ? handleCancel() : handleShow();
      }}
    >
      {/* <IoHome className="h-[32px] w-[32px]" /> */}
      <MdOutlineCancelPresentation
        className={`h-[32px] w-[32px] ${showSidebar ? "block" : "hidden"}`}
      />
      <IoMenu
        className={`h-[32px] w-[32px] ${showSidebar ? "hidden" : "block"}`}
      />
    </button>
  </div>
  <div className="relative w-full">
    <ul
      className={`absolute flex w-full flex-col items-center gap-4 bg-orange-400 pb-20 pt-12 sm:static ${showSidebar ? "left-0" : "-left-[1000%]"}`}
    >
      {buttonsList.map((button) => (
        <li
          key={button.id}
          className={`rounded-[5px] p-5 sm:w-full sm:px-[5%] md:py-3 ${button.active ? "bg-pry" : "bg-red-400"}`}
        >
          <button
            className={`flex items-center gap-2 ${button.active ? "text-white" : "text-black"}`}
          >
            {button.icon}
            <p className="hidden text-sm font-semibold sm:flex md:text-base lg:text-[18px]">
              {button.name}
            </p>
          </button>
        </li>
      ))}
    </ul>
  </div>
</div>;
