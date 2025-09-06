import React from 'react';

// Image constants (assets have been extracted to the repository)
const img9 = "/Users/prantik.banerjee/kowledge-share-01/1098648425577f06b5185200490cc42f387c3a1d.png";
const img13 = "/Users/prantik.banerjee/kowledge-share-01/88a36fa6ec430934105e013c1ca0a59b22f514a1.png";
const imgLabel1 = "/Users/prantik.banerjee/kowledge-share-01/08ba37f4d01a8fb6db01232d312b69e81f789308.png";
const imgAvatar = "/Users/prantik.banerjee/kowledge-share-01/d4cd23318dc9103dac756381f7b96ec0b0ce635c.png";
const img21 = "/Users/prantik.banerjee/kowledge-share-01/14cdb7f0db25b0b864f4c83984091d4a9a8fae20.png";
const img26 = "/Users/prantik.banerjee/kowledge-share-01/2b5889aa408d28de51c610cfa15f75dcdf86b98b.png";
const img27 = "/Users/prantik.banerjee/kowledge-share-01/9a597963292f1b6186c640f9855ba895d2b62d52.png";
const img28 = "/Users/prantik.banerjee/kowledge-share-01/18ebd9cdbfadba2a164019aefdcb2e9baa15ca5b.png";
const img29 = "/Users/prantik.banerjee/kowledge-share-01/34b4fb4e76557db6e68cf450d448fa1869a612ca.png";
const img30 = "/Users/prantik.banerjee/kowledge-share-01/c407b6d858db543827807fee97ea5430dd941425.png";
const img31 = "/Users/prantik.banerjee/kowledge-share-01/9362256111c5948d9cc5cf5054e193829426a101.png";
const img45 = "/Users/prantik.banerjee/kowledge-share-01/e4518f900ff246129a00624fe6515b732c250ba3.png";
const img57 = "/Users/prantik.banerjee/kowledge-share-01/8e78ba9f5cabd7a13e9929f87fcdbd58200753a4.png";
const img58 = "/Users/prantik.banerjee/kowledge-share-01/94656c763419d52dee2e54d3cb2efc008989141e.png";
const img60 = "/Users/prantik.banerjee/kowledge-share-01/23e517db7f3f439b0e69417ff785d6105468ff85.png";
const img61 = "/Users/prantik.banerjee/kowledge-share-01/f2c0c845598b59efca558f5251baefaf46aac22f.png";
const img = "/Users/prantik.banerjee/kowledge-share-01/c93e6cb03fc31a59c3560a7de9fa6fe7d089338f.svg";
const img1 = "/Users/prantik.banerjee/kowledge-share-01/2c7d9e6b65ec9107e029d45806d249e00a54b1b4.svg";
const img2 = "/Users/prantik.banerjee/kowledge-share-01/26b1599335f900d9786d46b0697d03b7570bfae5.svg";
const img3 = "/Users/prantik.banerjee/kowledge-share-01/10e4a259e9f2ab48acabfbc8a04f4e48c23e2a56.svg";
const img4 = "/Users/prantik.banerjee/kowledge-share-01/8b04413a35777a507a6a0ba60e88f9dd16a9dffa.svg";
const img5 = "/Users/prantik.banerjee/kowledge-share-01/69337b3d394a1ea6915b1ce6e5483b1a1ce90ae8.svg";
const img6 = "/Users/prantik.banerjee/kowledge-share-01/cd5f8ddd9cd05e5a70b4900f9510c091ef3e3403.svg";
const img7 = "/Users/prantik.banerjee/kowledge-share-01/d50170523de48f9e439535a1cb154901b8db3ac7.svg";
const img8 = "/Users/prantik.banerjee/kowledge-share-01/1c904194b5d99e46d2fcff17ce74bafd59c6373c.svg";
const img10 = "/Users/prantik.banerjee/kowledge-share-01/6f92848d51612dd186969d534a37d845385f2c18.svg";
const img11 = "/Users/prantik.banerjee/kowledge-share-01/0840d3a969d7c0fe341ef4a83670ad47c12688be.svg";
const imgUnion = "/Users/prantik.banerjee/kowledge-share-01/d73731cc7b9ece817ebd20a2e04d63628bef6bb7.svg";
const imgUnion1 = "/Users/prantik.banerjee/kowledge-share-01/a76f44391aa184122b583b42de512d3faba3b1a8.svg";
const imgUnion2 = "/Users/prantik.banerjee/kowledge-share-01/91aec7e63c33da4b883a19b78e73dcd6426e5916.svg";
const img12 = "/Users/prantik.banerjee/kowledge-share-01/9e5cc94c7a4e2fa7f0d221c5dba8bbb01d72d35a.svg";
const img14 = "/Users/prantik.banerjee/kowledge-share-01/141ea47f8f00ea65908f8eb101ab0316c9412c94.svg";
const imgUnion3 = "/Users/prantik.banerjee/kowledge-share-01/83f551a64680180567277000cea499753a32cd15.svg";
const img15 = "/Users/prantik.banerjee/kowledge-share-01/fed40acc4cc554261c4fe54200dee2dfd3bb2060.svg";
const imgUnion4 = "/Users/prantik.banerjee/kowledge-share-01/956db3c99b192bb289a80df62e17070f2127dbab.svg";
const img16 = "/Users/prantik.banerjee/kowledge-share-01/f1234198c367a4e095c55c2b29eac67e2808e2d4.svg";
const img17 = "/Users/prantik.banerjee/kowledge-share-01/615e37fb4f72b5362cfcbd0053e1b270a0204e3f.svg";
const img18 = "/Users/prantik.banerjee/kowledge-share-01/81b4a2392b4350ceaf34b9af049f13c9edebe9f3.svg";
const img19 = "/Users/prantik.banerjee/kowledge-share-01/5de4948143e9a3c25fdd83cccac2f9881ad9d694.svg";
const img20 = "/Users/prantik.banerjee/kowledge-share-01/ace30dac736ad762d539ad0b4eb5897dcee3e5f7.svg";
const imgLabel = "/Users/prantik.banerjee/kowledge-share-01/a0f9e07aff2d042493b63c8cd26374ff676e0d1e.svg";
const imgLabel2 = "/Users/prantik.banerjee/kowledge-share-01/4d2b1f09733de7cf4cedee7eb0520f683554d27a.svg";
const img22 = "/Users/prantik.banerjee/kowledge-share-01/78eb34d8ae506011aec7b6b9b9783f132e6335aa.svg";
const img23 = "/Users/prantik.banerjee/kowledge-share-01/1c00a8085b69cc5053f714a201038ae1de38889d.svg";
const img24 = "/Users/prantik.banerjee/kowledge-share-01/9918b6c78f8ee33c5911899ecf90310524ba7742.svg";
const img25 = "/Users/prantik.banerjee/kowledge-share-01/73eef7b6a3349f187875c892e7b80b995640c66b.svg";
const img32 = "/Users/prantik.banerjee/kowledge-share-01/e5cf35c7eec123acb22babb99420a2b76194965f.svg";
const img33 = "/Users/prantik.banerjee/kowledge-share-01/3320936bec243c8829dce5d6886095f25ece9820.svg";
const imgLine273 = "/Users/prantik.banerjee/kowledge-share-01/5095f558ffea0823e057daab18c773a14e270a5f.svg";
const img34 = "/Users/prantik.banerjee/kowledge-share-01/77c8e0a6c4e7550206f6f55b778d6b923a23f918.svg";
const img35 = "/Users/prantik.banerjee/kowledge-share-01/728c2b44ecb43fe638062acdc8ab45e4d59ce564.svg";
const imgUnion5 = "/Users/prantik.banerjee/kowledge-share-01/496c79b8b2050ca20c182b8d303f095dab0c20c3.svg";
const img36 = "/Users/prantik.banerjee/kowledge-share-01/598b416a865ecf79c0d6da98f5b8e927e879d5d6.svg";
const img37 = "/Users/prantik.banerjee/kowledge-share-01/e651af83f4a558438a3a60e6df0a3bc98ab674fb.svg";
const img38 = "/Users/prantik.banerjee/kowledge-share-01/c46e902ce90d6623b2c66a42583a2752c9506ee6.svg";
const img39 = "/Users/prantik.banerjee/kowledge-share-01/cd8dc9ab56aeda2737bef93f26bb97dc3396d4e3.svg";
const img40 = "/Users/prantik.banerjee/kowledge-share-01/6bb77cfeb20705830076951ec36dfed6c2587cac.svg";
const img41 = "/Users/prantik.banerjee/kowledge-share-01/4a5c8e635190b8c4991de0fae08eacf47b7442b7.svg";
const img42 = "/Users/prantik.banerjee/kowledge-share-01/ed2d25fc54fd6ee040a3a0d411aebb5f6e2a5748.svg";
const img43 = "/Users/prantik.banerjee/kowledge-share-01/a1bc997b88023dfeb0553356e9ece2c5140b3a1d.svg";
const img44 = "/Users/prantik.banerjee/kowledge-share-01/96e002d81df92c4eba9b06dc403cc059ee6fa158.svg";
const img46 = "/Users/prantik.banerjee/kowledge-share-01/d5e6240f995bb12f805105fcd3ccea7667f9eb1e.svg";
const img47 = "/Users/prantik.banerjee/kowledge-share-01/c5f90caaaca130d7ce30b54845985f563c9449a6.svg";
const img48 = "/Users/prantik.banerjee/kowledge-share-01/29d3e4371343c16fb6265057af10e1daef258b80.svg";
const img49 = "/Users/prantik.banerjee/kowledge-share-01/943b33a7f6ecc1ce69584f4d340757516e1a7efc.svg";
const img50 = "/Users/prantik.banerjee/kowledge-share-01/ac1e86bb0a4fd05d1be3b72547c2b91e06197e7d.svg";
const img51 = "/Users/prantik.banerjee/kowledge-share-01/0330e043cb323963f16a6595bcdb6f1a6ae0289f.svg";
const img52 = "/Users/prantik.banerjee/kowledge-share-01/a323af3b23018fd95d9927f0a08ff8edfbb83cf1.svg";
const img53 = "/Users/prantik.banerjee/kowledge-share-01/29ead99f956351882002f49b8f24998d826e546c.svg";
const img54 = "/Users/prantik.banerjee/kowledge-share-01/72f2cba55a525bd45573a0485096adf89c8a3598.svg";
const img55 = "/Users/prantik.banerjee/kowledge-share-01/e494f36c2bf09f9a6a5945a545d94dd9a0559094.svg";
const img56 = "/Users/prantik.banerjee/kowledge-share-01/4dd4aab46bb79091115140fc39a104c90e5aa043.svg";
const img59 = "/Users/prantik.banerjee/kowledge-share-01/72e85e4fa79e89d3478a279555ded7a84170c432.svg";
const img62 = "/Users/prantik.banerjee/kowledge-share-01/0ec6b4a7ac9724a98f9fc54dd0969ebea8e23da4.svg";
const img63 = "/Users/prantik.banerjee/kowledge-share-01/b5b488f202750ef04efc036a056e892e23b99c34.svg";

interface TopBarProps {
    platform?: 'MacOS' | 'Windows' | 'Browser';
}

function TopBar({ platform = "MacOS" }) {
    return (
        <div className="content-stretch flex items-center justify-start relative size-full" data-name="Platform=MacOS" data-node-id="2236:7741">
            <div className="content-stretch flex h-full items-center justify-start relative shrink-0" data-name="Left" data-node-id="2236:7742">
                <div className="box-border content-stretch flex flex-col h-8 items-center justify-center px-3 py-0 relative shrink-0 w-[76px]" data-name="System Area" data-node-id="2236:7743">
                    <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0" data-name="_Top Bar - Stoplights" data-node-id="2236:7748">
                        <div className="relative shrink-0 size-3" data-name="Close" id="node-I2236_7748-10935_72666">
                            <img alt="" className="block max-w-none size-full" src={img}/>
                        </div>
                        <div className="relative shrink-0 size-3" data-name="Minimize" id="node-I2236_7748-10935_72667">
                            <img alt="" className="block max-w-none size-full" src={img1}/>
                        </div>
                        <div className="relative shrink-0 size-3" data-name="Fullscreen" id="node-I2236_7748-10935_72668">
                            <img alt="" className="block max-w-none size-full" src={img2}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box-border content-stretch flex gap-2 h-10 items-center justify-end px-2 py-0 relative shrink-0 w-[230px]" data-name="Navigation" data-node-id="2236:7749">
                <div className="basis-0 box-border content-stretch flex grow items-center justify-start min-h-px min-w-px pl-0 pr-1 py-0.5 relative rounded-[4px] shrink-0" data-name="Switcher" data-node-id="2236:7750">
                    <div className="box-border content-stretch flex flex-col h-7 items-center justify-center p-px relative rounded-[4px] shrink-0" data-name="Chrome button" data-node-id="2236:7751">
                        <div className="box-border content-stretch flex gap-1 items-center justify-center overflow-clip px-[5px] py-0 relative rounded-[3px] shrink-0 size-[26px]" data-name="Base" id="node-I2236_7751-11348_135384">
                            <div className="overflow-clip relative shrink-0 size-5" data-name="State=outlined, Size=normal" id="node-I2236_7751-11348_135385">
                                <div className="absolute inset-[12.5%_7.5%]" data-name="Union" id="node-I2236_7751-11348_135385-15074_409">
                                    <img alt="" className="block max-w-none size-full" src={img3}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-stretch flex gap-1 items-start justify-start relative shrink-0" data-name="Arrows" data-node-id="2236:7752">
                    <div className="box-border content-stretch flex flex-col h-7 items-center justify-center p-px relative rounded-[4px] shrink-0" data-name="Chrome button" data-node-id="2236:7753">
                        <div className="box-border content-stretch flex gap-1 items-center justify-center overflow-clip px-[5px] py-0 relative rounded-[3px] shrink-0 size-[26px]" data-name="Base" id="node-I2236_7753-11348_135384">
                            <div className="overflow-clip relative shrink-0 size-5" data-name="State=outlined, Size=normal" id="node-I2236_7753-11348_135385">
                                <div className="absolute inset-[20%_15%]" data-name="Union" id="node-I2236_7753-11348_135385-15068_35">
                                    <img alt="" className="block max-w-none size-full" src={img4}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box-border content-stretch flex flex-col h-7 items-center justify-center p-px relative rounded-[4px] shrink-0" data-name="Chrome button" data-node-id="2236:7754">
                        <div className="box-border content-stretch flex gap-1 items-center justify-center opacity-40 overflow-clip px-[5px] py-0 relative rounded-[3px] shrink-0 size-[26px]" data-name="Base" id="node-I2236_7754-11348_135376">
                            <div className="overflow-clip relative shrink-0 size-5" data-name="State=outlined, Size=normal" id="node-I2236_7754-11348_135377">
                                <div className="absolute flex inset-[20%_15%] items-center justify-center">
                                    <div className="flex-none h-3 rotate-[180deg] w-3.5">
                                        <div className="relative size-full" id="node-I2236_7754-11348_135377-13159_1362">
                                            <img alt="" className="block max-w-none size-full" src={img5}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box-border content-stretch flex flex-col h-7 items-center justify-center p-px relative rounded-[4px] shrink-0" data-name="Chrome button" data-node-id="2236:7755">
                        <div className="box-border content-stretch flex gap-1 items-center justify-center overflow-clip px-[5px] py-0 relative rounded-[3px] shrink-0 size-[26px]" data-name="Base" id="node-I2236_7755-11348_135384">
                            <div className="overflow-clip relative shrink-0 size-5" data-name="State=outlined, Size=normal" id="node-I2236_7755-11348_135385">
                                <div className="absolute inset-[5%]" data-name="Union" id="node-I2236_7755-11348_135385-15068_115">
                                    <img alt="" className="block max-w-none size-full" src={img6}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="basis-0 bg-[rgba(249,237,255,0.25)] box-border content-stretch flex gap-1 grow items-center justify-start min-h-px min-w-[300px] overflow-clip px-3 py-[5px] relative rounded-[6px] shrink-0" data-name="Search input" data-node-id="2236:7756">
                <div className="content-stretch flex gap-2 items-center justify-center relative shrink-0" id="node-I2236_7756-11190_77764">
                    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="search" id="node-I2236_7756-11190_77765">
                        <div className="absolute inset-[7.5%]" data-name="Union" id="node-I2236_7756-11190_77765-15074_381">
                            <img alt="" className="block max-w-none size-full" src={img7}/>
                        </div>
                    </div>
                    <div className="font-['Lato:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[13px] text-center text-nowrap text-white" id="node-I2236_7756-11190_77767">
                        <p className="leading-[18px] whitespace-pre">Search Acme Inc</p>
                    </div>
                </div>
            </div>
            <div className="content-stretch flex h-full items-center justify-end relative shrink-0 w-[260px]" data-name="Right" data-node-id="2236:7757">
                <div className="box-border content-stretch flex gap-1 h-8 items-center justify-end px-2 py-0 relative shrink-0" data-name="Slack Icons" data-node-id="2236:7758">
                    <div className="box-border content-stretch flex flex-col h-7 items-center justify-center p-px relative rounded-[4px] shrink-0" data-name="Chrome button" data-node-id="2236:7763">
                        <div className="box-border content-stretch flex gap-1 items-center justify-center overflow-clip px-[5px] py-0 relative rounded-[3px] shrink-0 size-[26px]" data-name="Base" id="node-I2236_7763-11348_135384">
                            <div className="overflow-clip relative shrink-0 size-5" data-name="State=outlined, Size=normal" id="node-I2236_7763-11348_135385">
                                <div className="absolute inset-[5%]" data-name="Union" id="node-I2236_7763-11348_135385-15074_222">
                                    <img alt="" className="block max-w-none size-full" src={img8}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Simplified component structure for demo purposes
function SlackDesktopApp() {
    return (
        <div className="box-border content-stretch flex flex-col isolate items-center justify-start overflow-clip relative rounded-[10px] shadow-[0px_18px_48px_0px_rgba(0,0,0,0.1)] size-full" data-name="Slack Desktop App" data-node-id="2236:21270">
            <div className="content-stretch flex h-10 items-center justify-start relative shrink-0 w-full z-[3]" data-name="Top Bar" data-node-id="2236:21271">
                <TopBar />
            </div>
            
            <div className="absolute bottom-0 box-border content-stretch flex items-start justify-start left-0 overflow-clip pb-1 pl-0 pr-1 pt-0 right-0 rounded-[6px] top-10 z-[2]" data-name="App Contents" data-node-id="2236:21272">
                {/* Left Navigation Panel */}
                <div className="box-border content-stretch flex flex-col gap-4 h-[724px] isolate items-center justify-start overflow-clip pb-3 pt-1.5 px-0 relative shrink-0 w-[76px]" data-name="Conv. AI Nav" data-node-id="2236:21274">
                    {/* Workspace Icon */}
                    <div className="box-border content-stretch flex isolate items-center justify-between px-1 py-0 relative shrink-0 size-9 z-[7]" data-name="Workspace Switcher">
                        <div className="overflow-clip relative rounded-[8px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.08)] shrink-0 size-9 z-[2]" data-name="Workspace">
                            <div className="absolute bg-center bg-cover bg-no-repeat inset-0" data-name="Avatar" style={{ backgroundImage: `url('${img9}')` }}/>
                        </div>
                    </div>
                    
                    {/* Navigation Tabs */}
                    <div className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-center justify-start min-h-px min-w-px pb-0 pt-1 px-0 relative shrink-0 z-[6]" data-name="Conv. AI Tabs">
                        <div className="box-border content-stretch flex gap-3 isolate items-center justify-center p-[8px] relative rounded-[12px] shrink-0 size-[52px]" data-name="Tab - Home">
                            <div className="absolute bg-[rgba(249,237,255,0.25)] h-9 left-2 right-2 rounded-[8px] top-0 z-[1]" data-name="Backing"/>
                            <div className="absolute left-1/2 overflow-clip size-5 translate-x-[-50%] translate-y-[-50%] z-[2]" style={{ top: "calc(50% - 8px)" }}>
                                <div className="absolute inset-[8.01%_8.13%_7.5%_8.12%]" data-name="Union">
                                    <img alt="" className="block max-w-none size-full" src={imgUnion}/>
                                </div>
                            </div>
                            <div className="absolute bottom-3.5 font-['Lato:Bold',_sans-serif] leading-[0] left-1/2 not-italic overflow-ellipsis overflow-hidden text-[11px] text-center text-nowrap text-white translate-x-[-50%] translate-y-[100%] w-[68px] z-[4]">
                                <p className="[white-space-collapse:collapse] leading-[12px] overflow-ellipsis overflow-hidden">Home</p>
                            </div>
                        </div>
                        
                        <div className="box-border content-stretch flex gap-3 isolate items-center justify-center p-[8px] relative shrink-0 size-[52px]" data-name="Tab - DMs">
                            <div className="absolute left-1/2 overflow-clip size-5 translate-x-[-50%] translate-y-[-50%] z-[2]" style={{ top: "calc(50% - 8px)" }}>
                                <div className="absolute inset-[7.5%]" data-name="Union">
                                    <img alt="" className="block max-w-none size-full" src={imgUnion1}/>
                                </div>
                            </div>
                            <div className="absolute bottom-3.5 font-['Lato:Bold',_sans-serif] leading-[0] left-1/2 not-italic overflow-ellipsis overflow-hidden text-[11px] text-[rgba(244,218,255,0.8)] text-center text-nowrap translate-x-[-50%] translate-y-[100%] w-[68px] z-[4]">
                                <p className="[white-space-collapse:collapse] leading-[12px] overflow-ellipsis overflow-hidden">DMs</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Profile */}
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-9 z-[2]" data-name="Profile">
                        <div className="relative shrink-0 size-9" data-name="💻 Single Person">
                            <div className="absolute left-0 size-9 top-0" data-name="Avatar Mask">
                                <img alt="" className="block max-w-none size-full" height="36" src={img13} width="36"/>
                            </div>
                            <div className="absolute left-[22px] size-5 top-[22px]" data-name="status-member">
                                <div className="absolute inset-[27.5%]" data-name="Union">
                                    <img alt="" className="block max-w-none size-full" src={img14}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Sidebar */}
                <div className="bg-[rgba(249,237,255,0.11)] box-border content-stretch flex flex-col h-[724px] items-start justify-end overflow-clip relative rounded-bl-[6px] rounded-tl-[6px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] shrink-0 w-[230px]" data-name="Sidebar">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Sidebar header">
                        <div className="box-border content-stretch flex gap-2 h-[50px] items-center justify-start pl-4 pr-3 py-0 relative shrink-0 w-full" data-name="Sidebar titlebar">
                            <div className="basis-0 content-stretch flex grow items-center justify-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Left">
                                <div className="font-['Lato:Black',_sans-serif] leading-[0] not-italic relative shrink-0 text-[18px] text-nowrap text-white">
                                    <p className="leading-[27px] whitespace-pre">Acme Inc</p>
                                </div>
                                <div className="overflow-clip relative shrink-0 size-5" data-name="caret-down">
                                    <div className="absolute inset-[36.25%_27.5%_37.5%_27.5%]" data-name="Union">
                                        <img alt="" className="block max-w-none size-full" src={imgUnion3}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px overflow-clip pb-4 pt-0 px-2 relative shrink-0 w-full" data-name="Sidebar content">
                        {/* Pages Section */}
                        <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Pages">
                            <div className="box-border content-stretch flex gap-2 h-7 items-center justify-start overflow-clip px-3 py-0 relative rounded-[6px] shrink-0 w-full" data-name="💻 Page row">
                                <div className="opacity-80 overflow-clip relative shrink-0 size-[16.2px]" data-name="document">
                                    <div className="absolute inset-[11.25%_8.75%_10%_10%]" data-name="Union">
                                        <img alt="" className="block max-w-none size-full" src={img20}/>
                                    </div>
                                </div>
                                <div className="basis-0 font-['Lato:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic opacity-80 relative shrink-0 text-[15px] text-white">
                                    <p className="leading-[22px]">Unreads</p>
                                </div>
                            </div>
                            
                            <div className="box-border content-stretch flex gap-2 h-7 items-center justify-start overflow-clip px-3 py-0 relative rounded-[6px] shrink-0 w-full" data-name="💻 Page row">
                                <div className="overflow-clip relative shrink-0 size-[16.2px]" data-name="threads">
                                    <div className="absolute inset-[7.5%]" data-name="Union">
                                        <img alt="" className="block max-w-none size-full" src={img16}/>
                                    </div>
                                </div>
                                <div className="basis-0 font-['Lato:Black',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[15px] text-white">
                                    <p className="leading-[22px]">Threads</p>
                                </div>
                                <div className="bg-[#eabdfb] box-border content-stretch flex gap-2 h-[18px] items-center justify-start px-[9px] py-0 relative rounded-[10px] shrink-0" data-name="💻 Badge">
                                    <div className="font-['Lato:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#4a154b] text-[13px] text-nowrap">
                                        <p className="leading-[18px] whitespace-pre">1</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Starred Section */}
                        <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Section">
                            <div className="box-border content-stretch flex gap-2 h-7 items-center justify-start overflow-clip px-3 py-0 relative shrink-0 w-full" data-name="💻 Section header row">
                                <div className="box-border content-stretch flex items-start justify-start pb-0 pt-1 px-0 relative shrink-0" data-name="Icon wrap">
                                    <div className="overflow-clip relative shrink-0 size-[16.2px]" data-name="caret-down">
                                        <div className="absolute inset-[36.25%_27.5%_33.75%_27.5%]" data-name="Union">
                                            <img alt="" className="block max-w-none size-full" src={imgLabel}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="basis-0 font-['Lato:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#eaeaea] text-[15px]">
                                    <p className="leading-[22px]">Starred</p>
                                </div>
                            </div>
                            
                            {/* Channel Rows */}
                            <div className="box-border content-stretch flex gap-2 h-7 items-center justify-start overflow-clip px-3 py-0 relative rounded-[6px] shrink-0 w-full" data-name="💻 Channel row">
                                <div className="box-border content-stretch flex gap-1 items-center justify-start pb-0 pt-0.5 px-px relative shrink-0" data-name="Start">
                                    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Channel Icon">
                                        <div className="absolute inset-[15%_10%_5%_10%]" data-name="Union">
                                            <img alt="" className="block max-w-none size-full" src={img22}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="basis-0 font-['Lato:Black',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[15px] text-white">
                                    <p className="leading-[22px]">announcements</p>
                                </div>
                            </div>
                            
                            <div className="box-border content-stretch flex gap-2 h-7 items-center justify-start overflow-clip px-3 py-0 relative rounded-[6px] shrink-0 w-full" data-name="💻 Channel row">
                                <div className="box-border content-stretch flex gap-1 items-center justify-start pb-0 pt-0.5 px-px relative shrink-0" data-name="Start">
                                    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Channel Icon">
                                        <div className="absolute inset-[15%_10%_5%_10%]" data-name="Union">
                                            <img alt="" className="block max-w-none size-full" src={img22}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="basis-0 font-['Lato:Black',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[15px] text-white">
                                    <p className="leading-[22px]">general</p>
                                </div>
                            </div>
                            
                            {/* Active project-acme channel */}
                            <div className="bg-[#f9edff] box-border content-stretch flex gap-2 h-7 items-center justify-start px-3 py-0 relative rounded-[6px] shrink-0 w-full" data-name="💻 Channel row">
                                <div className="box-border content-stretch flex gap-1 items-center justify-start pb-0 pt-0.5 px-px relative shrink-0" data-name="Start">
                                    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Channel Icon">
                                        <div className="absolute inset-[15%_10%_5%_10%]" data-name="Union">
                                            <img alt="" className="block max-w-none size-full" src={img23}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="basis-0 font-['Lato:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#39063a] text-[15px]">
                                    <p className="leading-[22px]">project-acme</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Main Conversation Area */}
                <div className="basis-0 bg-white box-border content-stretch flex flex-col grow h-full isolate items-start justify-start min-h-px min-w-px relative rounded-br-[6px] rounded-tr-[6px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Conversation">
                    {/* Header */}
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full z-[2]" data-name="Primary view header">
                        <div className="box-border content-stretch flex gap-2 h-[50px] items-center justify-start px-3 py-0 relative shrink-0 w-full" data-name="Title Bar">
                            <div className="basis-0 content-stretch flex gap-1 grow items-center justify-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Left">
                                <div className="box-border content-stretch flex h-8 items-center justify-start px-1 py-0 relative rounded-[8px] shrink-0" data-name="Name">
                                    <div className="box-border content-stretch flex items-center justify-start p-[4px] relative shrink-0" data-name="Decoration">
                                        <div className="opacity-90 overflow-clip relative shrink-0 size-5" data-name="channel">
                                            <div className="absolute inset-[15%_10%_5%_10%]" data-name="Union">
                                                <img alt="" className="block max-w-none size-full" src={img44}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="font-['Lato:Black',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#1d1c1d] text-[18px] text-nowrap">
                                        <p className="leading-[27px] whitespace-pre">project-acme</p>
                                    </div>
                                    <div className="overflow-clip relative shrink-0 size-5" data-name="caret-down">
                                        <div className="absolute inset-[36.25%_27.5%_37.5%_27.5%]" data-name="Union">
                                            <img alt="" className="block max-w-none size-full" src={imgUnion3}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="font-['Lato:Regular',_sans-serif] leading-[0] not-italic opacity-90 relative shrink-0 text-[#454447] text-[13px] text-nowrap">
                                    <p className="leading-[18px] whitespace-pre">Don't add water</p>
                                </div>
                            </div>
                            <div className="content-stretch flex gap-2 items-start justify-end relative shrink-0" data-name="Action buttons">
                                <div className="bg-white h-7 relative rounded-[8px] shrink-0" data-name="Members button">
                                    <div className="box-border content-stretch flex items-start justify-start overflow-clip p-[4px] relative size-full">
                                        <div className="box-border content-stretch flex gap-1 items-start justify-start pl-1 pr-0 py-0 relative shrink-0" data-name="Icon">
                                            <div className="overflow-clip relative shrink-0 size-5" data-name="user">
                                                <div className="absolute inset-[10%_9.98%]" data-name="Union">
                                                    <img alt="" className="block max-w-none size-full" src={img32}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box-border content-stretch flex flex-col gap-1 h-full items-start justify-center px-1 py-0 relative shrink-0">
                                            <div className="flex flex-col font-['Lato:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#454447] text-[13px] text-nowrap text-right">
                                                <p className="leading-[18px] whitespace-pre">17</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Tabs */}
                        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start px-4 py-0 relative shrink-0 w-full" data-name="Subheader">
                            <div className="basis-0 content-stretch flex gap-2 grow h-full items-end justify-start min-h-px min-w-px relative shrink-0" data-name="Tabs">
                                <div className="h-9 relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name=".local Channel Tab">
                                    <div className="box-border content-stretch flex gap-1 h-9 items-center justify-end overflow-clip pb-3 pt-2.5 px-2 relative">
                                        <div className="relative shrink-0 size-4" data-name="Icon">
                                            <div className="absolute inset-[7.5%]" data-name="Union">
                                                <img alt="" className="block max-w-none size-full" src={img36}/>
                                            </div>
                                        </div>
                                        <div className="font-['Lato:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#1d1c1d] text-[13px] text-nowrap">
                                            <p className="leading-[18px] whitespace-pre">Messages</p>
                                        </div>
                                    </div>
                                    <div className="absolute border-[#83388a] border-[0px_0px_2px] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]"/>
                                </div>
                                
                                <div className="box-border content-stretch flex gap-1 h-9 items-center justify-end overflow-clip pb-3 pt-2.5 px-2 relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name=".local Channel Tab">
                                    <div className="relative shrink-0 size-4" data-name="✨ new-window">
                                        <div className="absolute inset-[7.5%]" data-name="Union">
                                            <img alt="" className="block max-w-none size-full" src={img37}/>
                                        </div>
                                    </div>
                                    <div className="font-['Lato:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#454447] text-[13px] text-nowrap">
                                        <p className="leading-[18px] whitespace-pre">Canvas</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Messages Area */}
                    <div className="basis-0 content-stretch flex flex-col grow items-start justify-end min-h-px min-w-px overflow-x-clip overflow-y-auto pb-3 pt-0 px-0 relative shrink-0 w-full" data-name="Messages">
                        {/* Sample Messages */}
                        <div className="bg-white box-border content-stretch flex gap-2 items-start justify-start px-5 py-2 relative shrink-0 w-full" data-name="💻 Conversation">
                            <div className="overflow-clip relative shrink-0 size-9" data-name="💻 Single Person">
                                <div className="absolute bg-center bg-cover bg-no-repeat left-0 rounded-[8px] size-9 top-0" data-name="Avatar" style={{ backgroundImage: `url('${img57}')` }}/>
                            </div>
                            <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="Content">
                                <div className="content-stretch flex gap-2 h-[18px] items-end justify-start relative shrink-0" data-name=".Message">
                                    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0" data-name="Sender">
                                        <div className="flex flex-col font-['Lato:Black',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d1c1d] text-[15px] text-nowrap">
                                            <p className="leading-[22px] whitespace-pre">Lee Hao</p>
                                        </div>
                                    </div>
                                    <div className="box-border content-stretch flex items-start justify-start pb-px pt-[3px] px-0 relative shrink-0" data-name=".Timestamp">
                                        <div className="flex flex-col font-['Lato:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#454447] text-[12px] text-nowrap">
                                            <p className="leading-[18px] whitespace-pre">10:58 AM</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="font-['Lato:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#1d1c1d] text-[15px]" style={{ width: "min-content" }}>
                                    <p className="leading-[22px]">Sounds like we're on the right track. <span className="text-[#1264a3]">@Zoe</span>, when do we aim to launch this campaign?</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white box-border content-stretch flex gap-2 items-start justify-start px-5 py-2 relative shrink-0 w-full" data-name="💻 Conversation">
                            <div className="overflow-clip relative shrink-0 size-9" data-name="💻 Single Person">
                                <div className="absolute bg-center bg-cover bg-no-repeat left-0 rounded-[8px] size-9 top-0" data-name="Avatar" style={{ backgroundImage: `url('${img60}')` }}/>
                            </div>
                            <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="Content">
                                <div className="content-stretch flex gap-2 h-[18px] items-end justify-start relative shrink-0" data-name=".Message">
                                    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0" data-name="Sender">
                                        <div className="flex flex-col font-['Lato:Black',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d1c1d] text-[15px] text-nowrap">
                                            <p className="leading-[22px] whitespace-pre">Zoe Maxwell</p>
                                        </div>
                                    </div>
                                    <div className="box-border content-stretch flex items-start justify-start pb-px pt-[3px] px-0 relative shrink-0" data-name=".Timestamp">
                                        <div className="flex flex-col font-['Lato:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#454447] text-[12px] text-nowrap">
                                            <p className="leading-[18px] whitespace-pre">11:27 AM</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="font-['Lato:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#1d1c1d] text-[15px]" style={{ width: "min-content" }}>
                                    <p className="leading-[22px]">Okay, let's aim for a soft launch in six weeks, with a full-blown launch in eight. That gives us some buffer for adjustments. Does that timeline work for everyone?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Message Composer */}
                    <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start pb-6 pt-0 px-5 relative shrink-0 w-full" data-name="Composer">
                        <div className="box-border content-stretch flex flex-col items-start justify-end pb-3 pt-0 px-0 relative rounded-[8px] shrink-0 w-full" data-name="Message input">
                            <div className="bg-white mb-[-12px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
                                <div className="content-stretch flex flex-col items-start justify-end overflow-clip relative w-full">
                                    <div className="box-border content-stretch flex items-start justify-start pb-[7px] pt-[9px] px-3 relative shrink-0 w-full" data-name="Composer input">
                                        <div className="h-[18px] relative shrink-0 w-px" data-name="Cursor">
                                            <div className="absolute bg-center bg-cover bg-no-repeat inset-0" data-name="Cursor-blink 1" style={{ backgroundImage: `url('${img45}')` }}/>
                                        </div>
                                        <div className="basis-0 font-['Lato:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#77757a] text-[15px]">
                                            <p className="leading-[22px]">Message #project-acme</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute border border-[rgba(94,93,96,0.45)] border-solid inset-[-1px] pointer-events-none rounded-[9px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.08)]"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Background with theme */}
            <div className="absolute inset-0 rounded-[10px] z-[1]" data-name="Window Background">
                <div className="overflow-clip relative size-full">
                    <div className="absolute bg-[#1d1c1d] inset-0 opacity-30" data-name="Base Tint"/>
                    <div className="absolute inset-0" data-name="Theme Background">
                        <div className="absolute bg-[#4a154b] inset-0" data-name="Color 1"/>
                        <div className="absolute inset-0" data-name="Secondary Color">
                            <div className="absolute bg-[#39063a] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%] mask-size-[100%_100%]" data-name="Color 2" style={{ maskImage: `url('${img62}')` }}/>
                        </div>
                        <div className="absolute inset-0" data-name="Central Blur">
                            <div className="absolute bg-[#4a154b] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%] mask-size-[100%_100%]" data-name="Color 1" style={{ maskImage: `url('${img63}')` }}/>
                        </div>
                    </div>
                    <div className="absolute border-[1px_0px_0px] border-[rgba(249,237,255,0.25)] border-solid inset-0 pointer-events-none rounded-[10px]"/>
                </div>
            </div>
        </div>
    );
}

export default SlackDesktopApp;
