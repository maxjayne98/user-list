export interface User {
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  phone: string;
  website: string;
  geo: {
    lat: string;
    lng: string;
  };

  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}
