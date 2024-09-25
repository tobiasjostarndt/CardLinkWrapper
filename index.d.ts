import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
export declare class CardLinkOriginal extends AwesomeCordovaNativePlugin {
    establishWSS(arg0: string): Promise<any>;
    isConnectedWSS(): Promise<any>;
    sendRequestSMSCodeMessage(arg0: string): Promise<any>;
    verifyCode(arg0: string): Promise<any>;
    isSMSCodeCorrect(): Promise<any>;
    setCanNumber(arg0: string): Promise<any>;
    startReadCard(): Promise<any>;
    isCardScanned(): Promise<any>;
}

export declare const CardLink: CardLinkOriginal;