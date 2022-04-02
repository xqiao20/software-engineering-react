import MyDislikes from "../components/profile/my-dislikes";
import {act, create} from 'react-test-renderer';
import TuitStats from "../components/tuits/tuit-stats";
import {findAllTuitsDislikedByUser} from "../services/dislikes-service";

test(
    'mydislike', () => {
        let status = {likes:123, dislikes: 234, replies:234, retuits: 345}
        let dislike;
        act(() => {
            dislike = create(
                <MyDislikes tuits={}/>
            )
        });

        const root = dislike.root;
        // eslint-disable-next-line testing-library/await-async-query
        const ttrTuits = root.findAllByProps({className:"ttr-tuit"});
        expect(ttrTuits.length).toEqual(dislikedTuits.length);
        ttrTuits.forEach((ttrTuit, ndx) => {
            expect(ttrTuit.props.children).toBe(dislikedTuits[ndx].tuit);
        });

    }
)


