// promise形式 getSetting
export const getSetting=()=>{
    return Promise((resovle,reject)=>{
        wx.getSetting({
            success: (result) => {
                resovle(result);
            },
            fail: (err) => {
                reject(err);
            },
        });
          
    });
}

// promise形式 chooseAddress
export const chooseAddress=()=>{
    return Promise((resovle,reject)=>{
        wx.chooseAddress({
            success: (result) => {
                resovle(result);
            },
            fail: (err) => {
                reject(err);
            },
        });
          
    });
}

// promise形式 openSetting
export const openSetting=()=>{
    return Promise((resovle,reject)=>{
        wx.openSetting({
            success: (result) => {
                resovle(result);
            },
            fail: (err) => {
                reject(err);
            },
        });
          
    });
}
  