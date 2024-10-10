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

export interface PageItemRegistration extends Struct.ComponentSchema {
  collectionName: 'components_page_item_registrations';
  info: {
    displayName: 'registration';
    icon: 'user';
    description: '';
  };
  attributes: {
    redirectTo: Schema.Attribute.String;
    title: Schema.Attribute.Component<'basic.title', false>;
    buttonText: Schema.Attribute.String;
  };
}

export interface PageItemPriceList extends Struct.ComponentSchema {
  collectionName: 'components_page_item_price_lists';
  info: {
    displayName: 'priceList';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    services: Schema.Attribute.Component<'complex.service', true>;
    design: Schema.Attribute.Enumeration<['twoColumns', 'threeColumns']>;
    title: Schema.Attribute.Component<'basic.title', false>;
  };
}

export interface PageItemLogIn extends Struct.ComponentSchema {
  collectionName: 'components_page_item_log_ins';
  info: {
    displayName: 'logIn';
    icon: 'key';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.Component<'basic.title', false>;
    redirectTo: Schema.Attribute.String;
    buttonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'P\u0159ihl\u00E1sit'>;
  };
}

export interface PageItemItems extends Struct.ComponentSchema {
  collectionName: 'components_page_item_items';
  info: {
    displayName: 'items';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    items: Schema.Attribute.Component<'complex.item', true>;
    mode: Schema.Attribute.Enumeration<['twoColumns', 'threeColumns']>;
    title: Schema.Attribute.Component<'basic.title', false>;
  };
}

export interface PageItemGallery extends Struct.ComponentSchema {
  collectionName: 'components_page_item_galleries';
  info: {
    displayName: 'gallery';
    icon: 'landscape';
  };
  attributes: {
    title: Schema.Attribute.Component<'basic.title', false>;
    pictures: Schema.Attribute.Component<'basic.picture', true>;
    columns: Schema.Attribute.Integer;
  };
}

export interface PageItemContact extends Struct.ComponentSchema {
  collectionName: 'components_page_item_contacts';
  info: {
    displayName: 'contact';
    icon: 'discuss';
    description: '';
  };
  attributes: {
    showSocial: Schema.Attribute.Boolean;
    mapData: Schema.Attribute.Component<'core.map-data', false>;
    title: Schema.Attribute.Component<'basic.title', false>;
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
    blocks: Schema.Attribute.Component<'complex.block', true>;
    title: Schema.Attribute.Component<'basic.title', false>;
    count: Schema.Attribute.Integer;
  };
}

export interface PageItemCards extends Struct.ComponentSchema {
  collectionName: 'components_page_item_cards';
  info: {
    displayName: 'cardList';
    icon: 'apps';
    description: '';
  };
  attributes: {
    cards: Schema.Attribute.Component<'complex.card', true>;
    layout: Schema.Attribute.Enumeration<['small', 'big', 'info']>;
    title: Schema.Attribute.Component<'basic.title', false>;
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

export interface CoreSocialNets extends Struct.ComponentSchema {
  collectionName: 'components_core_social_nets';
  info: {
    displayName: 'socialNets';
    icon: 'thumbUp';
  };
  attributes: {
    facebookUrl: Schema.Attribute.String;
    instagramUrl: Schema.Attribute.String;
    linkedInUrl: Schema.Attribute.String;
    pinterestUrl: Schema.Attribute.String;
  };
}

export interface CoreMapData extends Struct.ComponentSchema {
  collectionName: 'components_core_map_data';
  info: {
    displayName: 'mapData';
    icon: 'globe';
  };
  attributes: {
    lat: Schema.Attribute.Decimal;
    lon: Schema.Attribute.Decimal;
    popupText: Schema.Attribute.String;
  };
}

export interface CoreEmailTemplate extends Struct.ComponentSchema {
  collectionName: 'components_core_email_templates';
  info: {
    displayName: 'emailTemplate';
    icon: 'paperPlane';
  };
  attributes: {
    from: Schema.Attribute.String;
    html: Schema.Attribute.RichText;
    subject: Schema.Attribute.String;
    code: Schema.Attribute.String;
  };
}

export interface CoreAddress extends Struct.ComponentSchema {
  collectionName: 'components_core_addresses';
  info: {
    displayName: 'address';
    icon: 'house';
  };
  attributes: {
    street: Schema.Attribute.String;
    city: Schema.Attribute.String;
    state: Schema.Attribute.String;
    zip: Schema.Attribute.String;
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
    texts: Schema.Attribute.Component<'basic.text', true>;
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
    description: Schema.Attribute.Text;
    placement: Schema.Attribute.Enumeration<['left', 'right', 'top', 'bottom']>;
    picture: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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
      'meta.tag': MetaTag;
      'meta.data': MetaData;
      'page-item.registration': PageItemRegistration;
      'page-item.price-list': PageItemPriceList;
      'page-item.log-in': PageItemLogIn;
      'page-item.items': PageItemItems;
      'page-item.gallery': PageItemGallery;
      'page-item.contact': PageItemContact;
      'page-item.contact-form': PageItemContactForm;
      'page-item.columns': PageItemColumns;
      'page-item.cards': PageItemCards;
      'page-item.block': PageItemBlock;
      'core.social-nets': CoreSocialNets;
      'core.map-data': CoreMapData;
      'core.email-template': CoreEmailTemplate;
      'core.address': CoreAddress;
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
