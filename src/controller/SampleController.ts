import {Request, Response} from 'express';

export default class SampleController {

    index (req: Request, res: Response) {
        console.log("Hello Word - Sample!!!");

        return res.json({response: 'Sample Ok!'});
    }
}