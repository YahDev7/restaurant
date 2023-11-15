import { UseColors } from "../../hooks/colors";


const Social = () => {
    const { fb, ig, tiktok } = UseColors()

    let redesSociales = [fb, ig, tiktok]
    return (
        <article className=" top-[30%] right-0 fixed z-[1000] bg-white p-2 pt-6 rounded-l-[20px]">
            <ul>
                {redesSociales.map((el) =>
                    <li className="pb-6">
                        <a href="">
                            <img src={el} alt="" width="30px" />
                        </a>
                    </li>
                )}
            </ul>

        </article>

    );
}

export default Social;

