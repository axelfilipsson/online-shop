import { ProductStyle } from "../styles/ProductStyle";
import Link from "next/link";

import { useStateContext } from "../lib/Context";
export default function product({ product }) {


    const { title, price, image, slug } = product.attributes;
    return (

        <ProductStyle >
            <Link href={`product/${slug}`} >
                <div>


                    <div>
                        <img src={image.data.attributes.formats.small.url} />
                    </div>

                    <h2>
                        {title}
                    </h2>
                    <h3>
                        {price}
                    </h3>
                </div>
            </Link>
        </ProductStyle>

    )
}

