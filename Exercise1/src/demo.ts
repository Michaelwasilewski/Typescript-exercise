interface Contact {
    id: number;
    name: ContactName;
    birthDate?: Date;
    status: contactStatus;
}

enum contactStatus {
    Active = "active",
    Intactive = "inactive",
    New = "new"
}
interface Address {
    line1: string;
    line2: string;
    province: string;
    region : string;
    postalCode: string;
}
let primaryContact: Contact = {
    id: 12345,
    birthDate:  new Date ("01-01-1980"),
    name: "Jamie Johnson",
    status: contactStatus.Active
}

type ContactName = string