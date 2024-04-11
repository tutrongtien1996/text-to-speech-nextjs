import { findNameVoices, formatTime } from "@/controllers/helper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faEye, faDownload, faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

interface ItemProductProps {
    title: string;
    number_chars: number;
    created_at: Date | undefined; 
    voice_id: string;
    url_audio?: string | null;
}

const ItemProduct: React.FC<ItemProductProps> = (props) => {
    return (
        <tr className="border-bottom">
            <td className="ps-2 py-3"><input type="checkbox" /></td>
            <td className="col_title">{props.title}</td>
            <td className="col_chars">{props.number_chars}</td>
            <td className="col_date">{formatTime(props.created_at)}</td>
            <td className="col_status">thành công</td>
            <td className="col_voices">{findNameVoices(props.voice_id)}</td>
            <td className="col_action">
                <ul className="list-inline mt-3">
                    <li className="list-inline-item play_text_details">
                        <FontAwesomeIcon icon={faPlay} />
                    </li>
                    <li className="list-inline-item view_text_details">
                        <FontAwesomeIcon icon={faEye} />
                    </li>
                    <li className="list-inline-item download_text_details">
                        <a id="" className="download text-dark" href={props.url_audio ?? "#"} download="voice-text-to-speech.mp3">
                        <FontAwesomeIcon icon={faDownload} />
                        </a>
                    </li>
                    <li className="list-inline-item edit_text_details">
                        <FontAwesomeIcon icon={faPen} />
                    </li>
                    <li className="list-inline-item delete_text_details">
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </li>
                </ul>
            </td>
        </tr>
    );
}

export default ItemProduct;
