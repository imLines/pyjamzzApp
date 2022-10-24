import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const {persistAtom} = recoilPersist();

const shop = atom({
    key: "shop",
    default: [],
    effects_UNSTABLE: [persistAtom]
});

export default shop;