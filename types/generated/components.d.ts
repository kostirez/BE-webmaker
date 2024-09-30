import type { Struct, Schema } from '@strapi/strapi';

export interface StylesTextStyle extends Struct.ComponentSchema {
  collectionName: 'components_styles_text_styles';
  info: {
    displayName: 'textStyle';
    description: '';
  };
  attributes: {
    weight: Schema.Attribute.Enumeration<
      ['thin', 'light', 'medium', 'bold', 'extraBold']
    >;
    color: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger']
    >;
    size: Schema.Attribute.Enumeration<['small', 'medium', 'large']>;
  };
}

export interface PageItemPriceList extends Struct.ComponentSchema {
  collectionName: 'components_page_item_price_lists';
  info: {
    displayName: 'priceList';
    icon: 'bulletList';
  };
  attributes: {
    services: Schema.Attribute.Component<'complex.service', true>;
    style: Schema.Attribute.Enumeration<['twoColumns', 'threeColumns']>;
  };
}

export interface PageItemItems extends Struct.ComponentSchema {
  collectionName: 'components_page_item_items';
  info: {
    displayName: 'items';
    icon: 'bulletList';
  };
  attributes: {
    items: Schema.Attribute.Component<'complex.item', true>;
    style: Schema.Attribute.Enumeration<['twoColumns', 'threeColumns']>;
  };
}

export interface PageItemGalerie extends Struct.ComponentSchema {
  collectionName: 'components_page_item_galeries';
  info: {
    displayName: 'galerie';
    icon: 'picture';
  };
  attributes: {
    pictures: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.Component<'basic.title', false>;
  };
}

export interface PageItemContact extends Struct.ComponentSchema {
  collectionName: 'components_page_item_contacts';
  info: {
    displayName: 'contact';
    icon: 'discuss';
  };
  attributes: {
    showMap: Schema.Attribute.Boolean;
    showSocial: Schema.Attribute.Boolean;
  };
}

export interface PageItemContactForm extends Struct.ComponentSchema {
  collectionName: 'components_page_item_contact_forms';
  info: {
    displayName: 'contactForm';
    icon: 'user';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.Component<'basic.title', false>;
  };
}

export interface PageItemColumns extends Struct.ComponentSchema {
  collectionName: 'components_page_item_columns';
  info: {
    displayName: 'columns';
    icon: 'apps';
    description: '';
  };
  attributes: {
    style: Schema.Attribute.Enumeration<['primary', 'secondary']>;
    blocks: Schema.Attribute.Component<'complex.block', true>;
    title: Schema.Attribute.Component<'basic.title', false>;
  };
}

export interface PageItemCards extends Struct.ComponentSchema {
  collectionName: 'components_page_item_cards';
  info: {
    displayName: 'cards';
    icon: 'apps';
  };
  attributes: {
    cards: Schema.Attribute.Component<'complex.card', true>;
    style: Schema.Attribute.Enumeration<['small', 'big', 'info']>;
  };
}

export interface PageItemBlock extends Struct.ComponentSchema {
  collectionName: 'components_page_item_blocks';
  info: {
    displayName: 'block';
  };
  attributes: {
    block: Schema.Attribute.Component<'complex.block', false>;
    style: Schema.Attribute.Enumeration<['left', 'middle', 'right']>;
  };
}

export interface MetaTag extends Struct.ComponentSchema {
  collectionName: 'components_meta_tags';
  info: {
    displayName: 'tag';
    icon: 'globe';
  };
  attributes: {
    name: Schema.Attribute.String;
    content: Schema.Attribute.Text;
  };
}

export interface MetaData extends Struct.ComponentSchema {
  collectionName: 'components_meta_data';
  info: {
    displayName: 'data';
  };
  attributes: {
    title: Schema.Attribute.String;
    tags: Schema.Attribute.Component<'meta.tag', true>;
  };
}

export interface ComplexService extends Struct.ComponentSchema {
  collectionName: 'components_complex_services';
  info: {
    displayName: 'service';
    icon: 'stack';
  };
  attributes: {
    title: Schema.Attribute.Component<'basic.title', false>;
    text: Schema.Attribute.Component<'basic.text', false>;
    price: Schema.Attribute.Component<'basic.price', false>;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComplexItem extends Struct.ComponentSchema {
  collectionName: 'components_complex_items';
  info: {
    displayName: 'Item';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.Component<'basic.title', false>;
    text: Schema.Attribute.Component<'basic.text', false>;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComplexCard extends Struct.ComponentSchema {
  collectionName: 'components_complex_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    title: Schema.Attribute.Component<'basic.title', false>;
    text: Schema.Attribute.Component<'basic.text', false>;
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    link: Schema.Attribute.Component<'basic.link', false>;
  };
}

export interface ComplexBlock extends Struct.ComponentSchema {
  collectionName: 'components_complex_blocks';
  info: {
    displayName: 'Block';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.Component<'basic.title', false>;
    text: Schema.Attribute.Component<'basic.text', true>;
    picture: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button: Schema.Attribute.Component<'basic.button', false>;
  };
}

export interface BasicTitle extends Struct.ComponentSchema {
  collectionName: 'components_basic_titles';
  info: {
    displayName: 'Title';
    icon: 'bold';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.String;
    style: Schema.Attribute.Component<'styles.text-style', false>;
  };
}

export interface BasicText extends Struct.ComponentSchema {
  collectionName: 'components_basic_texts';
  info: {
    displayName: 'text';
    icon: 'layer';
  };
  attributes: {
    text: Schema.Attribute.Text;
    style: Schema.Attribute.Component<'styles.text-style', false>;
  };
}

export interface BasicPrice extends Struct.ComponentSchema {
  collectionName: 'components_basic_prices';
  info: {
    displayName: 'price';
    icon: 'handHeart';
    description: '';
  };
  attributes: {
    value: Schema.Attribute.String;
    currency: Schema.Attribute.Enumeration<['CZK', 'EURO', 'USD']> &
      Schema.Attribute.DefaultTo<'CZK'>;
  };
}

export interface BasicPicture extends Struct.ComponentSchema {
  collectionName: 'components_basic_pictures';
  info: {
    displayName: 'picture';
    icon: 'picture';
    description: '';
  };
  attributes: {
    url: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    placement: Schema.Attribute.Enumeration<['left', 'right', 'top', 'bottom']>;
  };
}

export interface BasicLink extends Struct.ComponentSchema {
  collectionName: 'components_basic_links';
  info: {
    displayName: 'link';
    icon: 'globe';
  };
  attributes: {
    url: Schema.Attribute.String;
    insideMySite: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface BasicButton extends Struct.ComponentSchema {
  collectionName: 'components_basic_buttons';
  info: {
    displayName: 'button';
    icon: 'cursor';
  };
  attributes: {
    text: Schema.Attribute.String;
    link: Schema.Attribute.Component<'basic.link', false>;
    style: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'link', 'nav', 'cancel']
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'styles.text-style': StylesTextStyle;
      'page-item.price-list': PageItemPriceList;
      'page-item.items': PageItemItems;
      'page-item.galerie': PageItemGalerie;
      'page-item.contact': PageItemContact;
      'page-item.contact-form': PageItemContactForm;
      'page-item.columns': PageItemColumns;
      'page-item.cards': PageItemCards;
      'page-item.block': PageItemBlock;
      'meta.tag': MetaTag;
      'meta.data': MetaData;
      'complex.service': ComplexService;
      'complex.item': ComplexItem;
      'complex.card': ComplexCard;
      'complex.block': ComplexBlock;
      'basic.title': BasicTitle;
      'basic.text': BasicText;
      'basic.price': BasicPrice;
      'basic.picture': BasicPicture;
      'basic.link': BasicLink;
      'basic.button': BasicButton;
    }
  }
}
