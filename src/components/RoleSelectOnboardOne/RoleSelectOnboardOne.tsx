import React from 'react'
import {
	TopContainerStyles,
	MainContainer,
	RoleOptionContainer,
	Container,
	AccountContainer,
	HeaderContainer,
	ImageContainer,
	JoinUsHeader,
	FooterContainer
} from './RoleSelectOnboardOneStyles'

import { DescriptionOffer } from '../DescriptionOffer/descriptionOffer'
import { PageFooter, Props } from '../PageFooter/PageFooter'
import { Header } from '../Header'
import { loggedIn } from '../HeaderNavLink/HeaderNavLink'
import { Option } from '../RoleSelectOption/RoleSelectOption'
import userIcon from '../../stories/assets/user.svg'
import briefcaseIcon from '../../stories/assets/briefcase.svg'
import { Login } from '../Login/Login'
import { LeftSide } from '../LeftSide/LeftSide'

export const RoleSelectOnboardOne: React.FC<Props> = ({ footerLinks }) => {
	return (
		<Container>
			<TopContainerStyles>
				<HeaderContainer>
					<Header item={loggedIn} />
				</HeaderContainer>
				<MainContainer>
					<ImageContainer>
						<LeftSide backgroundImage='Baobab' />
					</ImageContainer>
					<RoleOptionContainer>
						<div>
							<JoinUsHeader>Join us</JoinUsHeader>
							<DescriptionOffer
								text={"To begin this story, tell us what kind of account you'd be opening "}
							/>
							<div>
								<Option
									label='Buyer'
									text='Personal account to manage all you activities.'
									src={userIcon}
									alt='User icon'
								/>
							</div>
							<div>
								<Option
									label='Seller'
									text='Own or belong to a company, this is for you.'
									src={briefcaseIcon}
									alt='Briefcase icon'
								/>
							</div>
							<AccountContainer>
								<Login isSignedUp={true} href='./' />
							</AccountContainer>
						</div>
					</RoleOptionContainer>
				</MainContainer>
			</TopContainerStyles>
			<FooterContainer>
				<PageFooter footerLinks={footerLinks} />
			</FooterContainer>
		</Container>
	)
}
