import { User } from '../../users/user.entity';
import { setSeederFactory } from 'typeorm-extension';

export default setSeederFactory(User, (faker) => {
  const user = new User();
  user.firstName = faker.person.firstName('male');
  user.lastName = faker.person.lastName('male');
  user.isActive = faker.datatype.boolean(faker.number.int({ min: 0, max: 1 }));
  return user;
});
