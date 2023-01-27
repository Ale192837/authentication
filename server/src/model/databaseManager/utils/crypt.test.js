import encrypt from "./encrypt";
import decrypt from "./decrypt";

test("Return if cryptograph are working", () => {

    let data = "some data";
    let dataEncrypted = encrypt(data);
    let dataDecrypted = decrypt(dataEncrypted);

    expect(dataEncrypted === data).toBe(false);
    expect(dataDecrypted === data).toBe(true);

});