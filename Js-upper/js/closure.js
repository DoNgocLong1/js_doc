//Khái niệm : là một hàm có thể ghi nhớ vị trí có được tạo và truy cập được biến ở ngoài phạm vi cùa nó
//Ứng dụng : viết code gọn hơn, ứng dụng tính private trong OOP
//lưu ý: biến tham chiếu (refer) trong slosure sẽ không được xóa khỏi bộ nhớ khi hàm cha thực thi xong
/* function createLogger (namespace) {
    function logger (message) {
        console.log(`[${namespace}] ${message}`)
    }
    return logger
}
const log1 = createLogger('Info')
log1('bắt đầu gửit mail')
log1('gửi mail lỗi lần 1, xin thử lại')
log1('gửi mail thành công cho user fiaơ')
 */

// sử dụng closure để lưu các giá trị vào localstorge
/* function createStorage (key) {
    const store = JSON.parse(localStorage.getItem(key)) ?? {}
    const save = () => {
        localStorage.setItem(key, JSON.stringify(store))
    }
    const storage = {
        get(key) {
            return store[key]
        },
        set(key, value) {
            store[key] = value
            save()
        },
        remove(key) {
            delete store[key]
            save()
        }
    }
    return storage
}
const profileSetting = createStorage('profile_setting_1')
profileSetting.set('fullname','Đỗ Ngọc Long')
profileSetting.set('age',21)
profileSetting.set('address','Bắc Ninh')
profileSetting.remove('fullname')
console.log(profileSetting.get('fullname')) */



