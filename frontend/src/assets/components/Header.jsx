const Header = () => {
    return (
        <div className="flex items-center justify-between border-b p-4 h-24 bg-gray-100">
            <div className="search">
                <input
                    type="text"
                    placeholder="Search..."
                    className="border rounded-lg p-2 w-60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex items-center space-x-4">
                <div id="notification" className="border-r-2 pr-4">
                    <svg width="
                    30px" height="30px" viewBox="0 0 32 32" id="Lager_95" data-name="Lager 95" xmlns="http://www.w3.org/2000/svg">
                        <g id="Rectangle_1" data-name="Rectangle 1" transform="translate(4)" fill="none" stroke="#040505" strokeMiterlimit="10" strokeWidth="4">
                            <path d="M12,0h0A12,12,0,0,1,24,12V24a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V12A12,12,0,0,1,12,0Z" stroke="none"/>
                            <path d="M12,2h0A10,10,0,0,1,22,12v8a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V12A10,10,0,0,1,12,2Z" fill="none"/>
                        </g>
                        <rect id="Rectangle_2" data-name="Rectangle 2" width="32" height="4" rx="2" transform="translate(0 20)" fill="#040505"/>
                        <path id="Path_9" data-name="Path 9" d="M16,32h0a4,4,0,0,1-4-4V26h8v2A4,4,0,0,1,16,32Z" fill="#040505"/>
                    </svg>
                </div>
                <div id="user" className="flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="currentColor"
                        className="bi bi-person-circle text-gray-700"
                        viewBox="0 0 16 16"
                    >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path
                            fillRule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                        />
                    </svg>
                    <span className="ml-2 text-gray-700">User name</span>
                </div>
            </div>
        </div>
    );
};

export default Header;
