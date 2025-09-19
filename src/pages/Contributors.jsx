import { FaGithub } from "react-icons/fa"
import { SiVercel, SiDatadog } from "react-icons/si"
import Navbar from "../components/Navbar"

const Contributors = () => {
    const topContributors = [
        { name: "mazeincoding", contributions: 679, avatar: "M" },
        { name: "izadoesdev", contributions: 122, avatar: "I" }
    ]

    const allContributors = [
        { name: "anwarulislam", contributions: 53, avatar: "A" },
        { name: "khanguyen74", contributions: 26, avatar: "K" },
        { name: "DevloperAmanSingh", contributions: 24, avatar: "D" },
        { name: "Zaid-maker", contributions: 21, avatar: "Z" },
        { name: "mezotv", contributions: 17, avatar: "M" },
        { name: "enkei64", contributions: 17, avatar: "E" },
        { name: "aashishparuvada", contributions: 15, avatar: "A" },
        { name: "simonorzel26", contributions: 12, avatar: "S" },
        { name: "San-77x", contributions: 11, avatar: "S" },
        { name: "sinanptm", contributions: 11, avatar: "S" },
        { name: "priyankarpal", contributions: 8, avatar: "P" },
        { name: "Pratiyankkumar", contributions: 8, avatar: "P" },
        { name: "ayush18pop", contributions: 8, avatar: "A" },
        { name: "gantiro", contributions: 7, avatar: "G" },
        { name: "Shubbu03", contributions: 6, avatar: "S" },
        { name: "letyassine", contributions: 6, avatar: "L" },
        { name: "GeorgeCaoJ", contributions: 6, avatar: "G" },
        { name: "dipanshurdev", contributions: 6, avatar: "D" },
        { name: "karansingh21202", contributions: 6, avatar: "K" },
        { name: "YaoSiQian", contributions: 6, avatar: "Y" },
        { name: "brandonmcconnell", contributions: 5, avatar: "B" },
        { name: "Notoriousbrain", contributions: 5, avatar: "N" },
        { name: "SamSyntax", contributions: 4, avatar: "S" },
        { name: "vadi25", contributions: 4, avatar: "V" },
        { name: "ryumacodes", contributions: 4, avatar: "R" },
        { name: "naoNao89", contributions: 4, avatar: "N" },
        { name: "ga1az", contributions: 4, avatar: "G" },
        { name: "creotove", contributions: 4, avatar: "C" },
        { name: "ahmedfahim21", contributions: 4, avatar: "A" },
        { name: "pulkitgarg04", contributions: 4, avatar: "P" },
        { name: "Harshitshukla0208", contributions: 4, avatar: "H" },
        { name: "ahmetskilinc", contributions: 4, avatar: "A" },
        { name: "thrxpt", contributions: 4, avatar: "T" },
        { name: "andrewckor", contributions: 3, avatar: "A" },
        { name: "Ni-zav", contributions: 3, avatar: "N" },
        { name: "taqh", contributions: 3, avatar: "T" },
        { name: "zelkim", contributions: 2, avatar: "Z" },
        { name: "vishesh711", contributions: 2, avatar: "V" },
        { name: "tuananh31j", contributions: 2, avatar: "T" },
        { name: "fathisiddiqi", contributions: 2, avatar: "F" },
        { name: "Antonio-jb", contributions: 2, avatar: "A" },
        { name: "deifos", contributions: 2, avatar: "D" },
        { name: "Sompalkar", contributions: 2, avatar: "S" },
        { name: "saiteja-in", contributions: 2, avatar: "S" },
        { name: "sahilsobhani", contributions: 2, avatar: "S" },
        { name: "youknowom", contributions: 2, avatar: "Y" },
        { name: "MarcBlattmann", contributions: 2, avatar: "M" },
        { name: "KhacTuanIT", contributions: 2, avatar: "K" },
        { name: "Jaydeeprawat17", contributions: 2, avatar: "J" },
        { name: "anagobabatunde", contributions: 1, avatar: "A" },
        { name: "W-DOS0", contributions: 1, avatar: "W" },
        { name: "ZakaHaceCosas", contributions: 1, avatar: "Z" },
        { name: "vagxrth", contributions: 1, avatar: "V" },
        { name: "treepo1", contributions: 1, avatar: "T" },
        { name: "bytaesu", contributions: 1, avatar: "B" },
        { name: "StarKnightt", contributions: 1, avatar: "S" },
        { name: "Shubhashish-Chakraborty", contributions: 1, avatar: "S" },
        { name: "ShadowArcanist", contributions: 1, avatar: "S" },
        { name: "Sanjit-K", contributions: 1, avatar: "S" },
        { name: "chrissshan", contributions: 1, avatar: "C" },
        { name: "daniel-inderos", contributions: 1, avatar: "D" },
        { name: "itsobi", contributions: 1, avatar: "I" },
        { name: "yimothysu", contributions: 1, avatar: "Y" },
        { name: "genmnz", contributions: 1, avatar: "G" },
        { name: "omraval18", contributions: 1, avatar: "O" },
        { name: "RohitChandel23", contributions: 1, avatar: "R" },
        { name: "vietnamesekid", contributions: 1, avatar: "V" },
        { name: "vracton", contributions: 1, avatar: "V" },
        { name: "ArjunCodess", contributions: 1, avatar: "A" },
        { name: "bhaveshxrawat", contributions: 1, avatar: "B" },
        { name: "JesseJohn7", contributions: 1, avatar: "J" },
        { name: "Chirag-varu", contributions: 1, avatar: "C" },
        { name: "DaniloArantesF", contributions: 1, avatar: "D" },
        { name: "DavidHDev", contributions: 1, avatar: "D" },
        { name: "DeepanshuMishraa", contributions: 1, avatar: "D" },
        { name: "Eshan276", contributions: 1, avatar: "E" },
        { name: "EverStarck", contributions: 1, avatar: "E" },
        { name: "haydenbleasel", contributions: 1, avatar: "H" },
        { name: "godshades", contributions: 1, avatar: "G" },
        { name: "ILoveScratch2", contributions: 1, avatar: "I" },
        { name: "Chubercik", contributions: 1, avatar: "C" },
        { name: "Justin322322", contributions: 1, avatar: "J" },
        { name: "khanghoang", contributions: 1, avatar: "K" },
        { name: "manuarora700", contributions: 1, avatar: "M" },
        { name: "MathisBls", contributions: 1, avatar: "M" },
        { name: "megh-bari", contributions: 1, avatar: "M" },
        { name: "phamtanminhtien", contributions: 1, avatar: "P" }
    ]

    const externalTools = [
        { name: "Marble", description: "Modern headless CMS for content management and the blog for OpenCut", icon: "🗿" },
        { name: "Vercel", description: "Platform where we deploy and host OpenCut", icon: <SiVercel /> },
        { name: "Databuddy", description: "GDPR compliant analytics and user insights for OpenCut", icon: <SiDatadog/> }
    ]

    return (
        <div className="bg-black text-white min-h-screen">
            <Navbar/>
            <div className="flex flex-col gap-12 justify-center items-center py-20 px-4 mt-20">
                {/* Header Section */}
                <div className="flex flex-col gap-6 text-center max-w-4xl">
                    <div className="flex justify-center">
                        <span className="text-gray-400 border border-gray-700 rounded-xl py-2 px-4 flex gap-2 items-center">
                            <FaGithub className="text-gray-200"/>
                            Open Source
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-100">Contributors</h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl">
                        Meet the amazing developers who are building the future of video editing
                    </p>
                    
                    {/* Stats */}
                    <div className="flex flex-wrap justify-center gap-8 mt-6">
                        <div className="flex gap-2 items-center">
                            <span className="text-white font-bold text-lg">89</span>
                            <small className="text-gray-400">contributors</small>
                        </div>
                        <div className="flex gap-2 items-center">
                            <span className="text-white font-bold text-lg">1202</span>
                            <small className="text-gray-400">contributions</small>
                        </div>
                    </div>
                </div>

                {/* Top Contributors */}
                <div className="w-full max-w-6xl">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-100 mb-2">Top Contributors</h2>
                        <p className="text-gray-400">Leading the way in contributions</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center max-w-4xl mx-auto">
                        {topContributors.map((contributor, index) => (
                            <div key={index} className="border border-gray-700 rounded-lg p-6 bg-gray-900/50 text-center">
                                <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    {contributor.avatar}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{contributor.name}</h3>
                                <div className="flex gap-2 justify-center items-baseline">
                                    <span className="text-white font-bold text-lg">{contributor.contributions}</span>
                                    <span className="text-gray-400 text-sm">contributions</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* All Contributors */}
                <div className="w-full max-w-6xl">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-100 mb-2">All Contributors</h2>
                        <p className="text-gray-400">Everyone who makes OpenCut better</p>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                        {allContributors.map((contributor, index) => (
                            <div key={index} className=" p-4 text-center">
                                <div className="w-14 h-14 rounded-full bg-gray-700 flex hover:bg-gray-800/50  transition-colors duration-300 cursor-pointer items-center justify-center text-sm font-bold mx-auto mb-2">
                                    {contributor.avatar}
                                </div>
                                <p className="text-sm font-medium truncate mb-1">{contributor.name}</p>
                                <p className="text-xs text-gray-400">{contributor.contributions}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full max-w-4xl">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-100 mb-2">External Tools</h2>
                        <p className="text-gray-400">Tools we use to build OpenCut</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {externalTools.map((tool, index) => (
                            <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 text-center flex flex-col items-center">
                                <div className="text-3xl mb-4">
                                    {typeof tool.icon === 'string' ? tool.icon : tool.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{tool.name}</h3>
                                <p className="text-gray-400 text-sm">{tool.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="w-full max-w-4xl text-center bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-700/50 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold mb-4">Join the community</h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        OpenCut is built by developers like you. Every contribution, no matter how small, 
                        helps make video editing more accessible for everyone.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a 
                            href="https://github.com/opencut/opencut" 
                            className="bg-white text-black px-6 py-2 rounded-2xl font-semibold hover:bg-gray-200 transition-colors flex gap-2 items-center"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub/>
                            Start Contributing
                        </a>
                        <a 
                            href="https://github.com/opencut/opencut/issues" 
                            className="border border-gray-600 text-white px-6 py-2 rounded-2xl font-semibold hover:bg-gray-800 transition-colors text-center"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Browse Issues
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contributors