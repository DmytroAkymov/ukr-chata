import { Stack } from '@mui/system';
import ButtonMenu from '../UI/ButtonMenu';

const MenuLink = () => {
    return (
        <Stack spacing={1} direction="row">
            <ButtonMenu link="/news">Новини</ButtonMenu>
            <ButtonMenu link="/events">Куди піти</ButtonMenu>
            <ButtonMenu link="/services">Послуги</ButtonMenu>
            <ButtonMenu link="/forum">Форум</ButtonMenu>
            <ButtonMenu link="/contacts">Наші контакти</ButtonMenu>
        </Stack>
    );
};

export default MenuLink;
